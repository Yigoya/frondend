import { Box, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import WidgetWrapper from './WidgetWrapper'
import FlexBetween from './FlexBetween'
import UserImage from './UserImage'
import image from '../p4.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { setFriendPost, setResetPosts, setUserposts, setposts } from 'state'
import { toast } from 'react-toastify'
function UserWidget({friendUser}) {
  const dispatch = useDispatch()
  const token = useSelector((state)=>state.token)
  const user = useSelector((state)=>state.user)
  const userId = useSelector((state)=>state.user._id)
  const friend = useSelector((state)=>state.friend) 
  const userPosts = useSelector((state)=>state.userPost)
  const friendPosts = useSelector((state)=> state.friendPost)

  const posts = useMemo(()=>friendUser ? friendPosts : userPosts,[])

  const getUserPosts = async ()=>{
    try{
    const response = await fetch(`http://localhost:5000/posts/${userId}/posts`,{
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
    const dataUser = await response.json()
    console.log(dataUser)
    dispatch(setUserposts({posts:dataUser}))
  }catch(e){
    toast.error("check your internet please")
   }
  }

  useEffect(()=>{
    if(!friendUser){
      getUserPosts()
    }
  },[dispatch,friendPosts])
  console.log(posts)
  const { firstName,lastName,idNo, picturePath,} =  useMemo(()=>friendUser ? friend : user,[])

  return (
    
        <FlexBetween
        flexDirection='column'
        p='40px 0'>
            <FlexBetween
            flexDirection='column'
            p='0 0 30px 0'>
                <UserImage margin='20px' image={picturePath} />
                <Typography fontWeight='500' fontSize='18px'>{`${firstName} ${lastName}`}</Typography>
                <Typography
                fontSize='9px' sx={{
                  opacity:'0.5',
                  padding:'5px'
                }}>{idNo}</Typography>
            </FlexBetween>
            <FlexBetween
            width='100%'
            padding='0 30px'>
              <FlexBetween
              flexDirection='column'>
                <Typography>{posts? posts.length : 0}</Typography>
                <Typography>posts</Typography>
              </FlexBetween>
              <FlexBetween
              flexDirection='column'>
                <Typography>{user.friends.length}</Typography>
                <Typography>friends</Typography>
              </FlexBetween>
            </FlexBetween>
        </FlexBetween>
    
  )
}

export default UserWidget