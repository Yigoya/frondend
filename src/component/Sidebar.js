import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import UserWidget from './UserWidget'
import Sidemenu from './Sidemenu'
import FlexBetween from './FlexBetween'
import { useDispatch, useSelector } from 'react-redux'
import { setFriends } from 'state'
import SchoolIcon from '@mui/icons-material/School';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Sidebar({friendUser}) {
    const theme = useTheme()
    const userId = useSelector((state)=>state.user._id)
    const token = useSelector((state)=>state.token)
    const friendId = useSelector((state)=>state.friendId)
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width: 600px')
    const apiKey = process.env.REACT_APP_API_KEY;
    const addFriend= async () =>{
      try{
      const res = await fetch(`${apiKey}/users/${userId}/${friendId}`,{
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
      
    })
    const data = await res.json()
    console.log(data)
    
  }catch(e){
    toast.error("check your internet please")
   }
    
    
    }
  return (
    <Box
    flex='1'
    p='35px'
    bgcolor={theme.palette.background.default}
    position='fixed'
    top='0'
    left='0'
    bottom='0'
    width='20vw'>
        <Box
        height='10%'
        width='100%'
        display='flex'
        alignItems='center'
        gap='10px'
        fontFamily= "'Oleo Script', cursive;"
        onClick={()=>navigate('/home')}
        >
        <SchoolIcon sx={{
          color:"red",
          fontSize:"26px"
        }}/>
        <Typography fontSize='24px'>studPage.</Typography>
        </Box>
        <UserWidget friendUser={friendUser} />
        {friendUser ? (
          <FlexBetween>
            <Button onClick={addFriend}>Add Friend</Button>
          </FlexBetween>
        ):(<Sidemenu />)}
        
    </Box>
  )
}

export default Sidebar