import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {BrowserRouter,Routes,Route} from"react-router-dom"
import theme from './theme'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/signUp' element={<SignUpScreen/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
