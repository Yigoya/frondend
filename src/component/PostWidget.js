import React, { useState } from 'react'
import WidgetWrapper from './WidgetWrapper'
import { Box, Typography } from '@mui/material'
import image from '../p4.jpeg'
import Friend from './Friend'
function PostWidget({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath, 
  likes,
  comments,
}) {
  const [long, setLong] = useState(false)
  const descript = String(description).slice(0,100)
  const isLong = String(description).length > 100
  let isString = false
  
  return (
    <WidgetWrapper width='340px'
    m='10px'><Box sx={{
      p:'0 0 15px 10px'
    }}>
        <Typography>{long ? description : (descript !== 'undefined' ? descript : '')}</Typography>
        <Typography onClick={()=>setLong(!long)} sx={{
          color:"red",
          '&:hover':{
            cursor:"pointer"
          }
        }}>{isLong && ( long ? "see less" : "see more")}</Typography>
        </Box>
        <img width='100%'
            height='auto'
            style={{borderRadius:'20px'}}
            src={`http://localhost:5000/assets/${picturePath}`} />
        <Friend 
          friendId={postUserId}
          name={name}
          subtitle={location}
          userPicturePath={userPicturePath}
          postId={postId}
          likes = {likes}
          comments = {comments}
        />
    </WidgetWrapper>
  )
}

export default PostWidget