import React from 'react'
import Header from '../components/Header';
import SlotBooking from '../components/SlotBooking';
import { Col,Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import SlotA from '../components/SlotA';
import SlotB from '../components/SlotB';
import SlotC from '../components/SlotC';
import SlotD from '../components/SlotD';
import SlotE from '../components/SlotE';
import "../components/Login.css";

function Slotpage() {
  return (
    <div className='Row' style={{'overflow-x': 'hidden'}}>


    <Row>
            <Header/>
            <Col lg={2} >
              <Sidebar/>
            </Col>


            <Col lg={10} >
              <SlotBooking/>
{/* <div className='column'>
              <Col lg={2}>
              <SlotA/>
            </Col>

            <Col lg={2} className='vertical'>
              <SlotB/>
            </Col><vr/>

            <Col lg={2}  className='vertical'>
              <SlotC/>
            </Col>

            <Col lg={2}  className='vertical'>
              <SlotD/>
            </Col>
            
            <Col lg={2}  className='vertical'>
              <SlotE/>
            </Col>
            <h1  className='vertical'></h1>
</div> */}
            </Col>


            
    </Row>
    
    </div>
  )
}

export default Slotpage