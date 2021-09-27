import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import '../App.css'
import {  getdriverDetails} from '../actions/authactions'



const Details=({match})=>{
    const dispatch= useDispatch();
    const {driver}=useSelector(state=>state.driverdetails)

    const driverId = match.params.id;

  useEffect(()=>{ 
 
    dispatch(getdriverDetails(driverId)) 

  
},[dispatch,driverId])




return (
    <Fragment>
       
                <Fragment>
                    <div className="my-5">
                        <h2>Profile Photo</h2>
                        <img src={driver.Profile_Photo?driver.Profile_Photo.url:''} alt="" /> 
                        <hr />
                        <h3>Aadhar Card</h3>
                        <h4> Aadhar No {driver.Aadhar_No}</h4>
                        <h4>Aadhar Front</h4>
                        <img src={driver.Aadhar_Photo_Front?driver.Aadhar_Photo_Front.url:''} alt={driver.Aadhar_No} />
                        <h4>Aadhar Back</h4>
                        <img src={driver.Aadhar_Photo_Back?driver.Aadhar_Photo_Back.url:''} alt={driver.Aadhar_No} />
                        <hr />


                        <h3>Drivng License </h3>
                        <h4> Drriving License No{driver.Driving_License_No}</h4>
                        <img src={driver.Driving_License_Photo?driver.Driving_License_Photo.url:''} alt={driver.Driving_License_NO} />
                        <hr />

                        <h3> PAN Card</h3>
                        <h4> Pan No{driver.PAN_No}</h4>
                        <img src={driver.PAN_Photo?driver.PAN_Photo.url:''} alt={driver.PAN_NO} />
                    </div>


                </Fragment>
        
    </Fragment>
)
}

export default Details