import { Box, Button, InputBase, useTheme } from '@mui/material'
import React, { useState } from 'react'
import FlexBetween from './FlexBetween'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import HandlePost from './HandlePost';
import { color } from '@mui/system';


function Navbar({isMobile}) {
  const [post,setpost] = useState(false)
  const theme = useTheme()
  return (
    <FlexBetween position='fixed'
    top='0'
    gap='10vw'
    left = {isMobile ?'0':'20vw'}
    height='70px'
    borderRadius='0 0 40px 40px'
    bgcolor='white'
    p='30px'
    zIndex="10"
    boxShadow={`0 10px 10px {theme.palette.neutral.light}`}
    >
      <Box
      display='flex'
      alignItems='center'
      height='40px'
      borderRadius='30px'
      border={`1px solid ${theme.palette.neutral.medium}`}
      bgcolor={theme.palette.neutral.light}
      >
        <SearchIcon 
         sx={{
          color:"white",
          bgcolor:theme.palette.neutral.medium,
          height:"40px",
          width:'60px',
          padding:"8px",
          borderRadius:'30px 0 0 30px'
        }} />
        <InputBase placeholder='search for friend' sx={{
          width:'27vw',
          pl:"10px",
          fontSize:"16px"
        }} />
      </Box>
      <FlexBetween sx={{
        gap:'10px',
        position:'relative',
        '& > *':{
          fontSize:"24px",
          cursor:"pointer"
        }
      }}>
        <NotificationsIcon />
        <MessageIcon />
        <Button
        
        sx={{
          bgcolor:theme.palette.neutral.medium,
          color:'white',
          fontSize:"14px",
          '&:hover':{
            bgcolor:"red"
          }
        }} onClick={()=>setpost(post ? false : true)} >post</Button>
        {post && (<HandlePost />)}
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar