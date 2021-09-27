import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Form, Row, Col, Button} from 'react-bootstrap'
import './styles/UpdateProfile.css'
import { update } from '../actions/authactions'
import axios from 'axios'
import {  getdriverDetails} from '../actions/authactions'
import { useAlert } from 'react-alert'
import { UPDATE_IMAGES_RESET } from '../constants/authconstants'
const Updateprofile=({match,history})=> {

  const {isUpdated}=useSelector(state=>state.updateimages)
  const dispatch= useDispatch();
  const alert=useAlert()
  const {driver}=useSelector(state=>state.driverdetails)

  const driverId = match.params.id;
  const [obj,setobj]= useState({})
 
useEffect(()=>{   
 
      
      
  dispatch(getdriverDetails(driverId)) 

   
  if(isUpdated){
      
    alert.success('Profile updated successfully')
    history.push('/dashboard')

     }
     dispatch({
       type:UPDATE_IMAGES_RESET
     })
 
},[dispatch,driverId,alert,isUpdated,history])

const handlechange=async (e)=>{
  const formdata=new FormData()
  if(e.target.name==='Profile_Photo'){
  formdata.append('images',e.target.files[0])
  const image= await axios.post('/api/admin/upload',formdata)
  
  console.log(e.target.files[0]);
  
  console.log("image",image.data)
    setobj({...obj,[e.target.name]:{url:image.data.path,filename:image.data.filename}})
  }
  else {
    setobj({...obj,[e.target.name]:e.target.value})

  }
  
  }
  
  
  
  const onsubmithandler=(e)=>{
       e.preventDefault()
      console.log("objects",obj);
      
      dispatch(update(driver._id,obj))
     
  
  }

    return (
        <div>
            <div className="head"> Welcome admin Dashboard !</div>
            <div className="bottom">
                
            <Form onSubmit={onsubmithandler} encType="multipart/form-data">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Driver first Name</Form.Label>
      <Form.Control type="text" name="firstname" placeholder={driver.firstname} onChange={(e)=>handlechange(e)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridphoto">
      <Form.Label>Profile pic</Form.Label>
      <div><input type="file" name="Profile_Photo" onChange={(e)=>handlechange(e)} ></input></div>
                            
      </Form.Group>
  </Row>
  <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Driver last Name</Form.Label>
      <Form.Control type="text" placeholder={driver.lastname} name="lastname" onChange={(e)=>handlechange(e)}  />
    </Form.Group>

 <Form.Group  className="mb-3" controlId="formGridMobile">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control placeholder={driver.Phone_No} name="Phone_No" onChange={(e)=>handlechange(e)}/>
  </Form.Group>

  <Form.Group  className="mb-3" controlId="formLicense">
    <Form.Label>License Number</Form.Label>
    <Form.Control placeholder={driver.Driving_License_No} name="Driving_License_No" onChange={(e)=>handlechange(e)} />
  </Form.Group>

  {/* <Row className="mb-3"> */}
    {/* <Form.Group as={Col} controlId="formLicenseValidity">
      <Form.Label>License Valididty date</Form.Label>
      <DatePickerComponent placeholder="Select Date"></DatePickerComponent>
                
    </Form.Group> */}

    {/* <Form.Group as={Col} controlId="formVehicleBrand">
      <Form.Label>Vehicle Brand</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formBrand">
      <Form.Label>Vehicle Brand</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formModel">
      <Form.Label>Vehicle Model</Form.Label>
      <Form.Control />
  </Form.Group> */}
  {/* <Form.Group className="mb-3" id="formVehicleName">
      <Form.Label>Vehicle Name</Form.Label>
      <Form.Control />
  </Form.Group> */}
  
      <select  id="role_field" className="form-control"  name="type" onChange={(e)=>handlechange(e)}
         placeholder={driver.type}>
          <option value="open">open</option>
         <option value="close">close</option>
         <option value="any">any</option>
                                    </select>
   {/* <Form.Group className="mb-3" id="formVehicleColor">
      <Form.Label>Vehicle Colour</Form.Label>
      <Form.Control />
   </Form.Group> */}
   {/* <Form.Group className="mb-3" id="formVehicleRegNum">
      <Form.Label>Vehicle registration number</Form.Label>
      <Form.Control />
  </Form.Group> */}
  {/* <Form.Group className="mb-3" id="formVehiclePurchase">
      <Form.Label>Vehicle Purchase year</Form.Label>
      <Form.Control />
  </Form.Group> */}
  {/* <Form.Group className="mb-3" id="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control />
                    </Form.Group> */}
                    {/* <Form.Group className="mb-3" id="formAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control />
  </Form.Group>
  <Form.Group className="mb-3" id="formAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control />
  </Form.Group> */}
  
                    
                    
                    

  <Button variant="primary"  className="bt2" type="submit">
    Submit
  </Button>
</Form>
                
            </div>
        </div>
    )
}

export default Updateprofile
