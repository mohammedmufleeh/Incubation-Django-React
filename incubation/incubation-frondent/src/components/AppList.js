import React, {useContext, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AppContext from '../Context/AppContext';
import {useNavigate, useParams} from 'react-router-dom'
import "./Login.css";

function AppListView() {
  let {app_delete, Applist, AppListViews}=useContext(AppContext)
  const params = useParams()
  let obj = params.id
  console.log('applist kittyooo'+ obj)
  const handleDelete = (id)=>{
    app_delete(id)
   }
   useEffect(() => {
    console.log("kitttii"+obj)
    AppListViews(obj)

   
   }, [])
   const navigate = useNavigate()
   const backButton=()=>{
    navigate(-1)
   }
   

  
  return (
    <div className='bgimg'>
          <h1 className='logout1' style={{'color':'blue'}}>Application
        </h1><hr></hr>



        <Table className='m-5 '  size="sm">

<tbody style={{'lineHeight':'8vh'}}>
  <h2 ><u>Details</u></h2>
  <tr>         
    <th>Name</th>
    <td  >{Applist.name}</td>
    </tr>

    <tr>
    <th>Address</th>
    <td>{Applist.Address}</td>
    </tr>

    <tr>
    <th>City</th>
    <td>{Applist.city}</td>
    </tr>

    <tr>
    <th>State</th>
    <td>{Applist.state}</td>  
    </tr>

    <tr>
    <th>Email Address</th>
    <td>{Applist.email}</td>
    </tr>

    <tr>
    <th>Phone number</th>
    <td>{Applist.phone}</td>
    </tr>

    <tr>
    <th>Company Name</th>
    <td>{Applist.companyname}</td>
    </tr>

    <tr>
    <th>About Team</th>
    <td>{Applist.describtion_on_team}</td>   
    </tr>
    Rejected
 
</tbody>

</Table>

<Button type='' className='logout_button, login, bgimg' variant="outline-primary" onClick={backButton}>Back</Button>

    </div>
  )
}

export default AppListView