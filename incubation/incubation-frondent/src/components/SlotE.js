// import Dropdown from 'react-bootstrap/Dropdown';
// import React, { useState,useContext,useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'
// import AppContext from '../Context/AppContext';
// import {useNavigate, useParams} from 'react-router-dom'
// import { Col,Row } from 'react-bootstrap';

// function SlotBooking() {
   
//   const [number, setNumber] = useState('')

//   let {AppListAprd, slots, second, slot, ChengeAppSlot,AddSlot,handleClose,show,setShow}=useContext(AppContext)
//   useEffect(() => {
//     console.log("ddddddddddddddddddddddddd")
//     AppListAprd ()
//     slots()
  

//   }, [])
// let [key, setKey]= useState('')
//   const getId= (id) =>{
//     setNumber(id)
//     ChengeAppSlot(id)
//     console.log(id)
//   }

//   const getNumber= () =>{
//     AddSlot(key,number)
//     console.log(number,key)
//     console.log("koppppp")
//   }

//   const navigate = useNavigate()
//   const backButton=()=>{
//    navigate(-1)
//   }

// const handleShow = (id) =>{
//   setShow(true);
//   setKey(id)

// }
//   return (
//     <div>
//          { slot.map((obj)=>
      
//       obj.session==='F' ?
//       obj.Active ? <Button className='m-1' style={{'width':'100px','height':'100px'}}
//       variant="secondary" onClick={handleShow} disabled ><h1>{obj.number} </h1><br></br> {obj.Date}<br></br>
//       { obj.application ? obj.company:'' }<br></br></Button>: <Button
//        className='m-1' style={{'width':'100px','height':'100px'}}
//        variant="warning" onClick={()=>handleShow(obj.id)}>
//       <h1>{obj.number} </h1><br></br>
//       <h5>Take a slot</h5>
//         {/* <h4>Slot No.{obj.slotnumber}</h4>
//         <h2>{obj.date}</h2>
//         <h3>{obj.time}</h3> {obj.Date}<br></br>{obj.time} */}
//       </Button>:"" )}
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title></Modal.Title>
//         </Modal.Header>
//         <Modal.Body >
//         Select the applicant to get slot
//         <Dropdown className='mt-5'>
//       <Dropdown.Toggle style={{'width':'400px'}} variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         { second.map((obj)=>
//              obj.slotactive ? '':<Dropdown.Item style={{'width':'400px',}}  onClick={()=>getId(obj.id)}>{obj.companyname}</Dropdown.Item>
//         )}
//       </Dropdown.Menu>
//     </Dropdown></Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={getNumber}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <Button type='' className='logout_button, login, bgimg' variant="outline-primary" onClick={backButton}>Back</Button>

//     </div>
     
//   )
// }
// export default SlotBooking