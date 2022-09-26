import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState,useContext,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import AppContext from '../Context/AppContext';
import {useNavigate, useParams} from 'react-router-dom'
import { Col,Row } from 'react-bootstrap';


function SlotBooking() {
   
  const [number, setNumber] = useState('')

  let {AppListAprd, slots, second, slot, ChengeAppSlot,AddSlot,handleClose,show,setShow}=useContext(AppContext)
  useEffect(() => {
    console.log("ddddddddddddddddddddddddd")
    AppListAprd ()
    slots()
  

  }, [])
 const [keys, setKey]= useState('')
  const getId= (id) =>{
    setNumber(id)
    ChengeAppSlot(id)
    console.log(id)
  }

  const getNumber= () =>{
    AddSlot(keys,number)
    console.log(number,keys)
    console.log("koppppp")
  }

  const navigate = useNavigate()
  const backButton=()=>{
   navigate(-1)
  }

 const handleShow = (id) =>{
  setShow(true);
  setKey(id)

}
  return (
    <div>

      <h1 style={{'textAlign':'center','color':'#808000'}}>Slot Book</h1>
      <Row>
        <Col lg={12}>

     
         { slot.map((obj)=>
      
      obj.session==='A' ?
      obj.Active ? <Button className='m-1' style={{'width':'125px','height':'125px'}}
      variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.company:'' }<br></br></Button>: <Button
       className='m-1' style={{'width':'125px','height':'125px'}}
       variant="warning" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1>
      <h5>Take a slot</h5>
        {/* <h4>Slot No.{obj.slotnumber}</h4>
        <h2>{obj.date}</h2>
        <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
      </Button>:"" )}  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { second.map((obj)=>
             obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getNumber}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal><hr/><hr/>
    


      <div className='column'>
              <Col lg={2}>
               { slot.map((obj)=>
      
      obj.session==='B' ?
      obj.Active ? <Button className='m-1' style={{'width':'100px','height':'100px'}}
      variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.company:'' }<br></br></Button>: <Button
       className='m-1' style={{'width':'100px','height':'100px'}}
       variant="warning" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1>
      <h5>Take a slot</h5>
        {/* <h4>Slot No.{obj.slotnumber}</h4>
        <h2>{obj.date}</h2>
        <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
      </Button>:"" )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { second.map((obj)=>
             obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getNumber}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
            </Col>
      <Col lg={2} className='vertical'>
      { slot.map((obj)=>
      
      obj.session==='C' ?
      obj.Active ? <Button className='m-1' style={{'width':'100px','height':'100px'}}
      variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.company:'' }<br></br></Button>: <Button
       className='m-1' style={{'width':'100px','height':'100px'}}
       variant="warning" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1>
      <h5>Take a slot</h5>
        {/* <h4>Slot No.{obj.slotnumber}</h4>
        <h2>{obj.date}</h2>
        <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
      </Button>:"" )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { second.map((obj)=>
             obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getNumber}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </Col>
           


            <Col lg={2}  className='vertical'>
            { slot.map((obj)=>
      
      obj.session==='D' ?
      obj.Active ? <Button className='m-1' style={{'width':'100px','height':'100px'}}
      variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.company:'' }<br></br></Button>: <Button
       className='m-1' style={{'width':'100px','height':'100px'}}
       variant="warning" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1>
      <h5>Take a slot</h5>
        {/* <h4>Slot No.{obj.slotnumber}</h4>
        <h2>{obj.date}</h2>
        <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
      </Button>:"" )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { second.map((obj)=>
             obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getNumber}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



            </Col>

            <Col lg={2}  className='vertical'>
               { slot.map((obj)=>
      
      obj.session==='E' ?
      obj.Active ? <Button className='m-1' style={{'width':'100px','height':'100px'}}
      variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.company:'' }<br></br></Button>: <Button
       className='m-1' style={{'width':'100px','height':'100px'}}
       variant="warning" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1>
      <h5>Take a slot</h5>
        {/* <h4>Slot No.{obj.slotnumber}</h4>
        <h2>{obj.date}</h2>
        <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
      </Button>:"" )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { second.map((obj)=>
             obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getNumber}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


            </Col>
            
            <Col lg={2}  className='vertical'>
                { slot.map((obj)=>
      
      obj.session==='F' ?
      obj.Active ? <Button className='m-1' style={{'width':'100px','height':'100px'}}
      variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.company:'' }<br></br></Button>: <Button
       className='m-1' style={{'width':'100px','height':'100px'}}
       variant="warning" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1>
      <h5>Take a slot</h5>
        {/* <h4>Slot No.{obj.slotnumber}</h4>
        <h2>{obj.date}</h2>
        <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
      </Button>:"" )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { second.map((obj)=>
             obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getNumber}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Button type='' className='logout_button, login, bgimg' variant="outline-primary" onClick={backButton}>Back</Button> */}
            </Col>
          


            <Col lg={2}  className='vertical'>
                { slot.map((obj)=>
      
      obj.session==='G' ?
      obj.Active ? <Button className='m-1' style={{'width':'100px','height':'100px'}}
      variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
      { obj.application ? obj.company:'' }<br></br></Button>: <Button
       className='m-1' style={{'width':'100px','height':'100px'}}
       variant="warning" onClick={()=>handleShow(obj.id)}>
      <h1>{obj.number} </h1>
      <h5>Take a slot</h5>
        {/* <h4>Slot No.{obj.slotnumber}</h4>
        <h2>{obj.date}</h2>
        <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
      </Button>:"" )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Select the applicant to get slot
        <Dropdown className='mt-5'>
      <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        { second.map((obj)=>
             obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getNumber}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button type='' className='logout_button, login, bgimg' variant="outline-primary" onClick={backButton}>Back</Button>
            </Col>
            <h1  className='vertical'></h1>
</div>
            </Col>
      </Row>
    </div>
     
  )
}
export default SlotBooking