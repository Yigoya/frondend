import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import FlexBetween from './FlexBetween'
import PostWidget from './PostWidget'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setResetPosts, setposts } from 'state'
import { toast } from 'react-toastify'
function Feed({friendUser,isMobile}) {
  const token = useSelector((state)=> state.token)
  const friend = useSelector((state)=> state.friendPost)
  const user = useSelector((state)=> state.posts)
  const posts = friendUser ? friend : user
  
  const dispatch = useDispatch()
  const apiKey = process.env.REACT_APP_API_KEY;
  const getPosts = async () => {
    try{
    const response = await fetch(`${apiKey}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log(data)
    dispatch(setResetPosts())
    dispatch(setposts({ posts: data }));
  }catch(e){
    toast.error("check your internet please")
   }
  };
  useEffect(()=>{
    getPosts()
    
  },[])
  
  return (
    <FlexBetween flexDirection='column'>
      <FlexBetween height='20%'
        width='100%'
        position='relative'
        padding='0 50px'
        > 
        <Typography sx={{
            fontSize:'26px',
            fontWeight:'600',
            fontFamily: "'Oleo Script', cursive;"
          }}>Feed</Typography>
        <FlexBetween sx={{
            gap:"20px",
            '& > *:hover':{
              color:'red',
              mb:'5px'
            }
          }}>
          <Typography>Latest</Typography>
          <Typography>Popular</Typography>
        </FlexBetween>
      </FlexBetween>
      <Box display='grid'
      gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr 1fr'}
      width='100%'

      >
       {posts.map(({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        })=>(
        <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments} />
       ))}
      </Box>
    </FlexBetween>
  )
}

export default Feed
