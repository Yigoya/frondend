import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNewPost, setReset, setposts } from 'state';
import WidgetWrapper from './WidgetWrapper';
import FlexBetween from './FlexBetween';
import UserImage from './UserImage';
import { Box, Button, IconButton, InputBase, useTheme } from '@mui/material';
import Dropzone from 'react-dropzone';
import { DeleteOutlined } from '@mui/icons-material';
import { bgcolor } from '@mui/system';
import { toast } from 'react-toastify';

function HandlePost() {
    const theme = useTheme()
    const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme()
  const token = useSelector((state)=>state.token)
    const { _id, picturePath } = useSelector((state)=> state.user)
    console.log(token, _id)
  const handlePost = async () =>{
    const apiKey = process.env.REACT_APP_API_KEY;
    const formData = new FormData()
    formData.append("userId",_id);
    formData.append("description", post);
    if(image){
        formData.append("picture",image)
        formData.append("picturePath",image.name)
    }
    try{
    const res = await fetch(`${apiKey}/posts`,{
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
    })
  
    
    const posts = await res.json()
    console.log(posts)
    
    dispatch(setNewPost({posts:posts}))
    setImage(false)
    setPost(null)
  }catch(e){
    toast.error('check your internet')
  }
  }
   

  return (
    <WidgetWrapper position='absolute'
    top='60px'
    right='20px'
    sx={{
        bgcolor:theme.palette.neutral.light,
        p:"20px",
        border:'1px solid red'
    }}
   >
        <FlexBetween>
            <UserImage size='40px'  image={picturePath} />
            <InputBase 
                placeholder='what is in your mind'
                value={post}
                onChange={(e)=>setPost(e.target.value)}
                sx={{
                    width:"150px",
                    m:"20px",
                    borderBottom:'1px solid red'
                }}
            />
        </FlexBetween>
        {isImage && (
            <Box
                gridColumn="span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  p="1rem">
                <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}>

                    {({ getRootProps, getInputProps })=>(
                        <FlexBetween>
                        <Box {...getRootProps()}
                            display='flex'
                            p="1rem"
                            sx={{ "&:hover": { cursor: "pointer" } ,
                            
                            '& > *':{
                                fontSize:"16px"
                            }
                            }}
                        >
                        <input  {...getInputProps()} />
                        {!image ? (<p>Add picture</p>):(
                            <p>{image.name}</p>
                        )}
                        </Box>
                        <IconButton onClick={()=> setImage(null)}>
                            <DeleteOutlined />
                        </IconButton>
                        </FlexBetween>
                    ) }
                    </Dropzone>
            </Box>
        )}
        <Button
        
        onClick={()=>setIsImage(!isImage)}
        sx={{
          bgcolor:theme.palette.neutral.medium,
          color:'white',
          fontSize:"13px",
          '&:hover':{
            bgcolor:"red"
          }
        }}>
        Image
        </Button>
        <Button
        disabled={!post}
        onClick={handlePost}>
        POST
        </Button>
    </WidgetWrapper>
  )
}

export default HandlePost