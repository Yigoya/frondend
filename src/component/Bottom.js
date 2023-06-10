import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import FlexBetween from './FlexBetween';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { setLogout } from 'state';

function Bottom() {
  const dispatch = useDispatch()
  const navigate = useDispatch()
  const handleLoguot =async ()=>{
    dispatch(setLogout())
  }
  return (
    <Box
    position='fixed'
    bottom='0'
    left='0'
    right='0'
    height='50px'
    width='100%'
    display='flex'
    
    zIndex='10'
    gap='15px'
    sx={{
      p:"5px 20px",
      justifyContent:'space-between',
      bgcolor: 'white',
     '&>*':{
      width:'20vw'
     }
    }}
    >
    <Box >
      <RssFeedIcon/><Typography>Feed</Typography>
    </Box>
    <Box >
      <ExploreIcon /><Typography>Explore</Typography>
    </Box>
    <Box >
      <MessageIcon /><Typography>Message</Typography>
    </Box>
    <Button  onClick={handleLoguot} marginTop='20px' sx={{
      bgcolor:"red",
      alignItems:"center",
      borderRadius:"5px",
      color:"white",
      p:'2px',
    '&:hover':{
      color: 'red'
    }
    }}>
      <LogoutIcon sx={{
        ml:"10px"
      }} /><Typography>Logout</Typography>
    </Button>
    </Box>
  )
}

export default Bottom