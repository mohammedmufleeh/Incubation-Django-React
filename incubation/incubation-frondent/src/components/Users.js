import React, {useContext, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AppContext from '../Context/AppContext';
import { useNavigate,Link } from 'react-router-dom';



function Users() {

  let {users, user, blockUser, unblockUser}=useContext(AppContext)
  const navigate = useNavigate()
  let a

  useEffect(() => {
    console.log("ddddddddddddddddddddddddd")
    users ()
  }, [])

  
  const backButton=()=>{
   navigate(-1)
  }
  return (
    <div className='bgimg'>


<h1 className='logout1'>Users Table
        </h1><hr></hr>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
          
          
            
        </tr>
      </thead>
      <tbody>
        {user.map((obj,index)=>
             <tr>
             <td>{index+1}</td>
             <td>{obj.first_name}</td>
             <td>{obj.email}</td>
             { obj.is_active ?<td><Button type='submit' className='logout_button, login' variant="outline-danger" onClick={()=>blockUser(obj.id)}>Block</Button></td>:
             <td><Button type='submit' className='logout_button, login' variant="outline-success" onClick={()=>unblockUser(obj.id)}>UnBlock</Button></td> }
           </tr>

        )}
      
  
      </tbody>
    </Table>
    <Button type='' className='logout_button, login, bgimg' variant="outline-primary" onClick={backButton}>Back</Button>
    </div>
  )
}

export default Users