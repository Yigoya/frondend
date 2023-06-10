import { Box, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import FlexBetween from './FlexBetween'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import UserImage from './UserImage';
import image from '../p4.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from 'state';
import axios from 'axios';
import { toast } from 'react-toastify';
function Friends({friendUser}) {
  const token = useSelector((state)=>state.token)
  const friend = useSelector((state)=>state.user.friends)
  const friendss = useSelector((state)=>state.friends)
  const friendId = useSelector((state)=>state.friend._id)
  const userId = useSelector((state)=>state.user._id)
  const id = useMemo(()=> friendUser ? friendId : userId)
  const dispatch = useDispatch()
  const apiKey = process.env.REACT_APP_API_KEY;
  const getFriend = async()=>{
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  try{
    const res = await axios.get(`${apiKey}/users/${id}/friends`, config)
  
    const data = await res.data
    console.log(data)
    dispatch(setFriends({ friends : data}))
  }catch(e){
    toast.error("check your internet please")
   }
  };
  console.log(friendss)
  const friends = useMemo(()=>friendUser ? friendss : friend)
  useEffect(()=>{
    getFriend()
  },[])
  
  return (
    <FlexBetween
        height='20%'
        width='100%'
        flexDirection='column'
        position='relative'
        padding='0 50px'
        >
        <FlexBetween width='100%'>
          <Typography sx={{
            fontSize:'26px',
            fontWeight:'600',
            fontFamily: "'Oleo Script', cursive;"
          }}>friends</Typography>
          <FlexBetween sx={{
            gap:"20px",
            '& > *:hover':{
              color:'red',
              mb:'5px'
            }
          }}>
            <PlayCircleIcon sx={{fontSize:'20px'}}/>
            <Typography>Watch all</Typography>
          </FlexBetween>
        </FlexBetween>
        <Box className='scroll' >
          {friends.length !== 0 ? friends.map((friend)=>(
            <UserImage image={friend.picturePath} />
          )) : (<Typography>You haven't got friend yet 😥</Typography>)}
           
        </Box>
        </FlexBetween>
  )
}

export default Friends