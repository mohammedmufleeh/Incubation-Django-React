import React, {useContext, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AppContext from '../Context/AppContext';
import { useNavigate,Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col ,Row} from 'react-bootstrap';

function Admin() {
  let {Allapp, allapp}=useContext(AppContext)
  const navigate = useNavigate()
  let a

  useEffect(() => {
    console.log("ddddddddddddddddddddddddd")
    Allapp ()

  }, [])
  return (
    <div className='bgimg'>
<Row>
  <Col lg={12} sm={12} md={12}>
  

<h1 className='logout1,'>Registrations
        </h1><hr></hr>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>companyname</th>
          <th>phone</th>
          <th>State</th>
          <th>email</th>
          <th>Status</th>          
          <th>Action</th>
            
        </tr>
      </thead>
      <tbody>
        {allapp.map((obj,index)=>
             <tr>
             <td>{index+1}</td>
             <td>{obj.companyname}</td>
             <td>{obj.phone}</td>
             <td>{obj.state}</td>
             <td>{obj.email}</td>
             <td>{obj.status}</td>
             
            <td> 
            {obj.status == 'Pending'? a=1: ((obj.status) == 'Rejected'? a=2: a=3)}
            <ProgressBar>
            
      {a>=2 ? <ProgressBar striped variant="danger" now={35} key={1} />:''}
      {a>=1 ? <ProgressBar variant="warning" now={30} key={2} />: ''}
     { a===3 ? <ProgressBar striped variant="success" now={35} key={3} />:''}
    </ProgressBar></td>
           </tr>

        )}
      
  
      </tbody>
    </Table>
  
    </Col>
</Row>
    </div>
  )
}

export default Admin