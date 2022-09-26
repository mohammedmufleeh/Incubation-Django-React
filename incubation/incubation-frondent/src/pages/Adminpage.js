import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Allapp from '../components/AllApp'
import { Col ,Row} from 'react-bootstrap';

function Adminpage() {
  return (
    <div style={{'overflow-x': 'hidden'}}>

       
        <Row>
          <Col lg={2} sm={2} md={2}>
        <Sidebar/>
        </Col>
      <Col lg={10} sm={10} md={10}>
        <Header/>
        <Allapp/>
      </Col>
      </Row>
      
      
       
    </div>
  )
}

export default Adminpage
