import { Box, Typography } from '@mui/material'
import React from 'react'
import Form from 'component/Form'
function Login() {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:"column",
      alignItems:'center',
      justifyContent:"ceter",
      marginTop:"20px",
      height:"100vh"
    }}>
        <Box sx={{
          display:'flex',
          flexDirection:"column",
          alignItems:'center',
          justifyContent:"ceter",
          margin:"20px"
        }}>
            <Typography sx={{
              fontSize:"24px",
              fontFamily:"'Oleo Script', cursive",
              color:'red',
              fontWeight:'600'
              }} >
                studPage.
            </Typography>
            <Typography color='black'>Welcome to studPage, the Page made for student</Typography>

        </Box>
        
        <Form />
    </Box>
  )
}

export default Login