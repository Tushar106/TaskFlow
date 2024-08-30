import React, { useContext } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import theme from './theme'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import PrivateRoute from './screens/PrivateRoute'

import { AuthContext } from './context/AuthContext'
import BoardsScreen from './screens/BoardsScreen'
import StoreContextProvider from './context/StoreContext'
import BoardScreen from './screens/BoardScreen'
import PageNotFoundScreen from './screens/PageNotFoundScreen'
export default function App() {
  const { user } = useContext(AuthContext);
  // console.log(user)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signUp' element={<SignUpScreen />} />
          <Route path='/' element={
            <PrivateRoute>
              <StoreContextProvider>
                <BoardsScreen />
              </StoreContextProvider>
            </PrivateRoute>
          } />
          <Route path='/board/:boardId' element={
            <PrivateRoute>
              <StoreContextProvider>
                <BoardScreen />
              </StoreContextProvider>
            </PrivateRoute>
          } />
          <Route path='*' element={<PageNotFoundScreen/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
