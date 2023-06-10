import React, { useState } from 'react'
import FlexBetween from './FlexBetween'
import UserImage from './UserImage'
import { IconButton, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { setFriendId, setpost } from 'state';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Friend({ postId, friendId, name, subtitle, userPicturePath, comments, likes}) {
  const [set,setSet]=useState('')
  const token = useSelector((state)=> state.token)
  const userId = useSelector((state)=> state.user._id)
  const isLiked = Boolean(likes[userId])
  const likeCount = Object.keys(likes).length;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const apiKey = process.env.REACT_APP_API_KEY;
  const patchLike = async ()=>{
    try{
    const res = await fetch(`${apiKey}/posts/${postId}/like`,{
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId: userId})
    });
    const updatedPost = await res.json()
    console.log(updatedPost)
    dispatch(setpost({post:updatedPost}))
    setSet("")
  }catch(e){
    toast.error("check your internet please")
   }
  };
  const gotToProfile= ()=>{
    dispatch(setFriendId(friendId))
    navigate(`/profile`)
  }
  return (
    <FlexBetween p='5px 20px 20px 0'>
      <FlexBetween onClick={gotToProfile}>
        <UserImage size='50px' image={userPicturePath} />
        <Typography ml='15px'>{name}</Typography>
      </FlexBetween>
      <FlexBetween sx={{'&>*':{
        m:"0 10px"
      }}}>
      <FlexBetween>
       <IconButton onClick={patchLike}>
       {isLiked? (<FavoriteIcon />):(<FavoriteBorderOutlined />)}
       </IconButton>
        <Typography>{likeCount}</Typography>
        </FlexBetween>
        <FlexBetween>
        <ChatBubbleOutlineIcon />
        <Typography>5.2k</Typography>
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Friend