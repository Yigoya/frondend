import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    mode:'dark',
    user:null,
    token:null,
    friend:null,
    friends: [],
    userPost:[],
    friendPost:null,
    friendId:"",
    posts:[],
    isLogging:false,
    isSuccess:false,
    isError:false,
    message:"",
}




export const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers:{
        setReset:(state)=>{
            state.isError = false
            state.isLogging = false
            state.isSuccess = false
        },
        setFriendId:(state,action)=>{
            state.friendId = action.payload
        },
        setResetPosts:(state)=>{
            state.posts = []
            state.friendPost = []
        },
        setMode:(state)=>{
            state.mode = state.mode === 'dark'? 'light' : 'dark';
        },
        setLogin:(state,action)=>{
            state.token = action.payload.token
            state.user = action.payload.user
        },
        setLogout:(state)=>{ 
            state.user = null
            state.token = null
        },
        setFriend:(state,action)=>{
            state.friend = action.payload.friend
        },
        setFriendPost:(state,action)=>{
            state.friendPost = action.payload.friend
        },
        setFriends:(state,action)=>{
            state.friends = action.payload.friends;
        },
        setposts:(state,action)=>{
            state.posts = action.payload.posts
        },
        setUserposts:(state,action)=>{
            state.userPost = action.payload.posts
        },
        setNewPost:(state,action)=>{
            state.posts.push(action.payload.posts)
        },
        setpost:(state,action)=>{
            const updatedposts = state.posts.map((post)=>{
                if(post._id === action.payload.post._id) return action.payload.post
                return post;
            })
            state.posts = updatedposts
        },
    },
    
});

export const { setReset,setResetPosts, setFriends,setLogin,setLogout,setMode,setpost,setposts,setNewPost,setFriend,setFriendId,setFriendPost,setUserposts} = stateSlice.actions
export default stateSlice.reducer

