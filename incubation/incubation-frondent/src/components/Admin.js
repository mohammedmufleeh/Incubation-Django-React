import React, {useContext, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AppContext from '../Context/AppContext';
import { useNavigate,Link } from 'react-router-dom';
import "./Login.css";


function Admin() {
  let {AdminHome, home, edit_app, edit_appR}=useContext(AppContext)
  const handlePending = (id)=>{
    edit_app(id)
    console.log(id)
   }
   const handleRejected = (id)=>{
    edit_appR(id)
    console.log(id)
   }
   const navigate = useNavigate()


  useEffect(() => {
    console.log("ddddddddddddddddddddddddd")
    AdminHome ()

  }, [])
  
  const backButton=()=>{
    navigate(-1)
   }

  return (
    <div className='bgimg'>


<h1 className='logout1'>Registrations
        </h1><hr></hr>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Email</th>
          <th>Details</th>          
          <th>Action</th>
          <th>Action</th>          
        </tr>
      </thead>
      <tbody>
        {home.map((obj,index)=>
             <tr>
             <td>{index+1}</td>
             <td>{obj.name}</td>
             <td>{obj.city}</td>
             <td>{obj.state}</td>
             <td>{obj.email}</td>
             <td><Button type='submit' className='logout_button, login' variant="outline-success" onClick={()=>navigate(`/AdminHome/${obj.id}/`)}>Open</Button></td>
             <td><Button type='submit' className='logout_button, login' variant="outline-success" onClick={()=>handlePending(obj.id)}>Approve</Button></td>
             <td><Button type='submit' className='logout_button, login' variant="outline-danger" onClick={()=>handleRejected(obj.id)}>Rejected</Button></td>
           </tr>

        )}
      
  
      </tbody>
    </Table>
    <Button type='' className='logout_button, login, bgimg' variant="outline-primary" onClick={backButton}>Back</Button>
    </div>
  )
}

export default Admin