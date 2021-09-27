import React,{Fragment} from 'react'
import { useSelector } from 'react-redux'


const Profile=()=>{
    const {user,loading} =useSelector(state=>state.auth)

    return <Fragment>
        {loading?<h2>driver not login</h2>:(
            <div>
            <h1>{user.email}</h1>
             <h2>{user.username}</h2> 
            </div>
        )}
    </Fragment>

}

export default Profile