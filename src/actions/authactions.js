import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS ,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
     REGISTER_USER_SUCCESS,
     LOAD_USER_REQUEST,
     LOAD_USER_SUCCESS,
     LOAD_USER_FAIL,
   LOGOUT_SUCCESS,
   LOGOUT_FAIL,
ALL_USERS_REQUEST,
ALL_USERS_SUCCESS,
ALL_USERS_FAIL,
UPDATE_USER_REQUEST,
UPDATE_USER_SUCCESS,
UPDATE_USER_FAIL,
USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    UPLOAD_REQUEST,
    UPLOAD_SUCCESS,
    UPLOAD_FAIL,
    UPDATE_IMAGES_REQUEST,
    UPDATE_IMAGES_SUCCESS,
    UPDATE_IMAGES_FAIL} from '../constants/authconstants.js'
    

import axios from 'axios'
export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
        const config={
                 headers:{
                     'Content-Type':'application/json'
                 }
                    }
        const {data}= await axios.post(`/api/user/login`,{email,password},config)
      
        dispatch({type:LOGIN_SUCCESS,
                   payload:data.user}) 
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}

//register user
export const register=(userdata)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST})
       
        const {data}= await axios.post(`/api/user/register`,userdata)
        dispatch({
            type:REGISTER_USER_SUCCESS,
                   payload:data.user
                })
        
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

//load user
export const loaduser=()=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST})
       
        const {data}= await axios.get(`/api/user/profile`)
        dispatch({type:LOAD_USER_SUCCESS,
                   payload:data.userprofile})
        
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response
        })
    }
}

//logout user
export const logoutuser=()=>async(dispatch)=>{
    try {
        
       
        await axios.get(`/api/user/logout`)
        dispatch({type:LOGOUT_SUCCESS
                   })
        
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
}

// Get all users
export const allUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST })

        const { data } = await axios.get(`/api/admin/alldrivers`)

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.alldrivers
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response
        })
    }
}

// Update User - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    console.log("User Dispatch",userData)
    try {

        dispatch({ type: UPDATE_USER_REQUEST })
     
      

        const { data } = await axios.put(`/api/admin/approved/driver/${id}`, {status:userData})

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data
        })
        console.log(data);

    } catch (error) {
        console.log("User Data",error)
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error
        })
    }
}

export const getdriverDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: USER_DETAILS_REQUEST })

      


        const { data } = await axios.get(`/api/admin/alldrivers/${id}`)
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.driver,
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const upload=(images)=>async(dispatch)=>{
    try {

        dispatch({ type: UPLOAD_REQUEST })

      


        const { data } = await axios.post('/api/admin/upload',images)
        console.log(data);
        dispatch({
            type: UPLOAD_SUCCESS,
            payload: data
        })
   
    } catch (error) {
        dispatch({
            type: UPLOAD_FAIL,
            payload: error.response
        })
    }
}
export const update=(id,userData)=>async(dispatch)=>{
    try {
        dispatch({ type: UPDATE_IMAGES_REQUEST })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data}= await axios.put(`/api/admin/update/driver/${id}`,{userdata:userData},config)
        console.log(userData);
        dispatch({
            type: UPDATE_IMAGES_SUCCESS,
            payload: data.success
        })
   
    } catch (error) {
        dispatch({
            type: UPDATE_IMAGES_FAIL,
            payload: error.response
        })
    }
}
export const logindriver=(Phone_No,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
        const config={
                 headers:{
                     'Content-Type':'application/json'
                 }
                    }
        const {data}= await axios.post(`/api/driver/login`,{Phone_No,password},config)
      
        dispatch({type:LOGIN_SUCCESS,
                   payload:data.driver}) 
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}

//register user
export const registerdriver=(userdata)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST})
       
        const {data}= await axios.post(`/api/driver/register`,userdata)
        console.log(data)
        dispatch({
            type:REGISTER_USER_SUCCESS,
                   payload:data
                })
        
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

//load user
export const loaddriver=()=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST})
       
        const {data}= await axios.get(`/api/driver/profile`)
        console.log(data);
        dispatch({type:LOAD_USER_SUCCESS,
                   payload:data})
        
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response
        })
    }
}

export const logoutdriver=()=>async(dispatch)=>{
    try {
        
       
        await axios.get(`/api/driver/logout`)
        dispatch({type:LOGOUT_SUCCESS
                   })
        
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearerrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}