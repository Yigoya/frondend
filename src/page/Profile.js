import { Box } from '@mui/material';
import Mainbar from 'component/Mainbar';
import Sidebar from 'component/Sidebar';
import WidgetWrapper from 'component/WidgetWrapper';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setFriend, setFriendPost, setResetPosts } from 'state';

function Profile() {
  const userId = useSelector((state)=>state.friendId)
  console.log(userId)
  const token = useSelector((state)=>state.token)
  const dispatch = useDispatch()
  const getUser = async () =>{
    try{
    const res = await fetch(`http://localhost:5000/users/${userId}`,{
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await res.json()
    console.log(data)
    dispatch(setFriend({friend:data}))
    
    const response = await fetch(`http://localhost:5000/posts/${userId}/posts`,{
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
    const dataUser = await response.json()
    console.log(dataUser)
    dispatch(setResetPosts())
    dispatch(setFriendPost({friend:dataUser}))
  }catch(e){
    toast.error("check your internet please")
   }
  }

  useEffect(()=>{
    getUser()
    
  },[])
  
  
  return (
    <Box>
      <Sidebar friendUser={true}/>
      <Mainbar friendUser={true}/>
    </Box>
  )
}

export default Profile