import React, {useContext, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AppContext from '../Context/AppContext';
import { useNavigate,Link } from 'react-router-dom';
import "./Login.css";

function Admin() {
  let {AppListRejected, Third, app_delete}=useContext(AppContext)

  const handleDelete = (id)=>{
    app_delete(id)
    console.log(id)
   }
  const navigate = useNavigate()

  useEffect(() => {
    console.log("dddddd")
    AppListRejected ()

  }, [])


  const backButton=()=>{
   navigate(-1)
  }

  return (
    <div className='bgimg'>
          <h1 className='logout1'>Rejected
        </h1><hr></hr>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Email</th>
          <th>Status</th>
          <th>Details</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {Third.map((obj,index)=>
             <tr>
             <td>{index+1}</td>
             <td>{obj.name}</td>
             <td>{obj.city}</td>
             <td>{obj.state}</td>
             <td>{obj.email}</td>
             <td>{obj.status}</td>
             <td><Button type='submit' className='logout_button, login' variant="outline-success" onClick={()=>navigate(`/Applist/${obj.id}/`)}>Open</Button></td>
             <td><Button type='submit' className='logout_button, login' variant="outline-danger" onClick={()=>handleDelete(obj.id)}>DELETE</Button></td>
           </tr>

        )}
      
  
      </tbody>
    </Table>
    <Button type='' className='logout_button, login, bgimg' variant="outline-primary" onClick={backButton}>Back</Button>
    </div>
  )
}

export default Admin