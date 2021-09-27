import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutuser } from '../actions/authactions'
const Log=()=>{

const dispatch=useDispatch();
const Logoutuser=()=>{
  dispatch(logoutuser())
}
    return(
        <Link to='/' onClick={Logoutuser}>Logout</Link>
    )
}

export default Log;