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
export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signUp' element={<SignUpScreen />} />
          <Route path='/' element={
            <StoreContextProvider>
              <PrivateRoute>
                <BoardsScreen />
              </PrivateRoute>
            </StoreContextProvider>
          }/>
          {/* <Route path='/board/:id' element={}/> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
