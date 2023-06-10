import React, { useMemo } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css'
import { themeSettings } from 'theme';
import Home from 'page/Home';
import Login from 'page/Login';
import Profile from 'page/Profile';
import { ToastContainer } from 'react-toastify';
function App() {
  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[])
  const isAuth = Boolean(useSelector((state)=>state.token))
  console.log(isAuth)
  return (
    <div className='app'>
      
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={isAuth ? <Home /> : <Navigate to='/' />} />
            <Route path='/profile' element={isAuth ? <Profile /> : <Navigate to='/' />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App