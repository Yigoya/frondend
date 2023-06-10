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
function Sidemenu() {
  const dispatch = useDispatch()
  const navigate = useDispatch()
  const handleLoguot =async ()=>{
    dispatch(setLogout())
  }
  return (
    <Box
        height='45%'
        width='100%'
        display='flex'
        flexDirection='column'
        gap='15px'
        sx={{
          '& > div:hover':{
            display:"flex",
            alignItems:"center",
            color:"red",
            p:"5px",
            background:"#e1e1e1",
            borderRadius:"0 20px 20px 0"
        
          },
          '& > div':{
            p:"5px 0",
            gap:"10px",
            '& > *':{
              fontSize:"20px"
            },
            
          },
          

        }}
        >
        <Box display='flex'>
          <RssFeedIcon/><Typography>Feed</Typography>
        </Box>
        <Box display='flex'>
          <ExploreIcon /><Typography>Explore</Typography>
        </Box>
        <Box display='flex'>
          <NotificationsIcon /><Typography>Notifications</Typography>
        </Box>
        <Box display='flex'>
          <MessageIcon /><Typography>Message</Typography>
        </Box>
        <Button display='flex' onClick={handleLoguot} marginTop='20px' sx={{
          bgcolor:"red",
          alignItems:"center",
          borderRadius:"5px",
          color:"white",
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

export default Sidemenu