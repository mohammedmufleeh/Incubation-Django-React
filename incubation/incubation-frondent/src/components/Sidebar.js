import React from 'react'
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate,Link } from 'react-router-dom';

function sidebar() {
  return (
    <div className='sidebar'>
      
           <Link to='/admin' className='sidebaritem' style={{'textDecoration': 'None', 'color':'white',}}> <h3>Home</h3> </Link> <br></br>
            <Link to='/pending' className='sidebaritem' style={{'textDecoration': 'None', 'color':'white',}}> <h3>Pending</h3></Link> <br></br>
            <Link to='/Approved' className='sidebaritem' style={{'textDecoration': 'None', 'color':'white',}}> <h3>Approved</h3></Link> <br></br>
            <Link to='/Rejected' className='sidebaritem' style={{'textDecoration': 'None', 'color':'white',}}> <h3>Rejected</h3></Link> <br></br>
            <Link to='/Users' className='sidebaritem' style={{'textDecoration': 'None', 'color':'white',}}> <h3>Users</h3></Link> <br></br>
            <Link to='/slotbooking' className='sidebaritem' style={{'textDecoration': 'None', 'color':'white',}}> <h3>SlotBooking</h3></Link><br></br>


    </div>
  )
}

export default sidebar