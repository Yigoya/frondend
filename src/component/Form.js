import React, { useEffect, useState} from 'react'
import { Formik } from 'formik'
import { Box, Button, TextField, Typography } from '@mui/material'
import Dropzone from 'react-dropzone'
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, setLogin } from 'state';
import { toast } from 'react-toastify';
import { setReset } from 'state';
import axios from 'axios';
const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    picture: yup.string().required("required"),
  });
  
  const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });
  
  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    idNo:"",
    email: "",
    password: "",
    picture: "",
  };
  const initialValuesLogin = {
    email: "",
    password: "",
  };
function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState('login')
    const isLogin = page === 'login'
    const isRegister = page === 'register'
    const apiKey = process.env.REACT_APP_API_KEY;
    const login = async (user)=>{
      
        try{
          const res = await axios.post(`${apiKey}/auth/login`,user)
          const data = res.data  
          console.log(data)
          dispatch(setLogin(data))
          if(data){
            navigate('/home')
          }

        }catch(e){
          toast.error("check your internet please")
        }
          
  }
  const register =async (user)=>{
      try{
        console.log(user)
        const res = await axios.post(`${apiKey}/auth/register`,user)
        const data = res.data  
          
        if(data){
            setPage('login')
        }
      }catch(e){
       toast.error("check your internet please")
      }
        
    } 


  
    const handleFormSubmit = async(values,onSubmitProps)=>{
        if(isLogin){
          login(values)
        }
        if(isRegister){
            const formData = new FormData()
            for(let v in values){
                formData.append(v,values[v])
            }
            formData.append("picturePath",values.picture.name)
            register(formData)
            
           
       }
    }
    
  return (
     <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
     >
        {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      })=>(
        <Box className= 'box'>
        <form onSubmit={handleSubmit}>
            <Box>
                {isRegister && (
                    <>
                    <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  borderRadius="30px"
                  InputProps={{
                      style: {
                        borderRadius: '10px', 
                        height:'40px',
                        color:'black',
                        padding: '0 0 0 10px',
                        marginBottom:'10px',
                        border:"2px solid black ",
                        '&::placeholder':{
                          color:"black"
                        }
                      },
                  }}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  InputProps={{
                      style: {
                        borderRadius: '10px', 
                        height:'40px',
                        color:'black',
                        padding: '0 0 0 10px',
                        marginBottom:'10px',
                        border:"2px solid black ",
                        '&::placeholder':{
                          color:"black"
                        }
                      },
                  }}
                />
                <TextField
                  label="Id Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.idNo}
                  name="idNo"
                  error={
                    Boolean(touched.idNo) && Boolean(errors.idNo)
                  }
                  helperText={touched.idNo && errors.idNo}
                  InputProps={{
                      style: {
                        borderRadius: '10px', 
                        height:'40px',
                        color:'black',
                        padding: '0 0 0 10px',
                        marginBottom:'10px',
                        border:"2px solid black ",
                        '&::placeholder':{
                          color:"black"
                        }
                      },
                  }}
                />
                <Box>
                    <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) =>
                        setFieldValue("picture", acceptedFiles[0])
                        }
                    >
                    {({ getRootProps, getInputProps })=>(
                        <Box
                        {...getRootProps()}
                        p='1rem'
                        border='2px solid black'
                        width='180px'
                        borderRadius='20px'
                        marginBottom='10px'
                        color='black'
                        >
                            <input {...getInputProps()} />
                            {!values.picture ? (<p>Add a picture</p>):(
                                <p>{values.picture.name}</p>
                            )}
                        </Box>
                    )}
                    </Dropzone>
                </Box>
                </>
                )}
                <TextField
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                InputProps={{
                      style: {
                        borderRadius: '10px', 
                        height:'40px',
                        color:'black',
                        padding: '0 0 0 10px',
                        marginBottom:'10px',
                        border:"2px solid black ",
                        '&::placeholder':{
                          color:"black"
                        }
                      },
                  }}
                />
                <TextField
                label="Password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                      style: {
                        borderRadius: '10px', 
                        height:'40px',
                        color:'black',
                        padding: '0 0 0 10px',
                        marginBottom:'10px',
                        border:"2px solid black ",
                        '&::placeholder':{
                          color:"black"
                        }
                      },
                  }}
                />
            </Box>
            <Box>
                <Button
                type='submit'
                
                sx={{
                  bgcolor:'red',
                  borderRadius:'10px',
                  color:"white",
                  '&:hover':{
                    color:'red'
                  }
                }}
                >{isLogin?'LOGIN':'REGISTER'}</Button>
                <Typography
                onClick={()=>{
                    setPage(isLogin ? "register":"login")
                    resetForm()
                }}
                sx={{
                  textDecoration:"underLine",
                  color:'#40E0D0',
                  fontSize:'11px',
                  padding:'8px',
                  '&:hover':{
                    cursor:'pointer'
                  }
                  
                }}
                >
                    {isLogin ? "Don't have Account? click here": "Already have Account? click here"}
                </Typography>
            </Box>
        </form>
        </Box>
      ) }
     </Formik>
  )
}

export default Form