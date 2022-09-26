import React, {useContext,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import AuthProvider from '../Context/AuthContext';
import "./Login.css";
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap'
import AuthContext from '../Context/AuthContext';
import { useNavigate,Link } from 'react-router-dom';

function Logout() {
 
  let {userLogout,authTokens}=useContext(AuthContext)
  // const navigate = useNavigate()
  let application = async(e) => {
    e.preventDefault()
    console.log('soraaaaaaaaaa')
    let response = await fetch('http://127.0.0.1:8000/api/users/application/',
  
    {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+String(authTokens.access),
      },
      body: JSON.stringify({
      'name':e.target.name.value,
      'Address':e.target.Address.value,
      'city':e.target.city.value,
      'state':e.target.state.value,
      'email':e.target.email.value,
      'phone':e.target.phone.value,
      'companyname':e.target.companyname.value,
      'describtion_on_team':e.target.describtion_on_team.value,
      'describtion_on_company':e.target.describtion_on_company.value,
      'describtion_on_products':e.target.describtion_on_products.value,
      'describe_problem':e.target.describe_problem.value,
      'unique_about_solution':e.target.unique_about_solution.value,
      'value_proportion_for_customer':e.target.value_proportion_for_customer.value,
      'advantage_competative':e.target.advantage_competative.value,
      'revenue_model':e.target.revenue_model.value,
      'market_product_size':e.target.market_product_size.value,
      'how_market':e.target.how_market.value,
      'incubation_type':e.target.incubation_type.value,
    })
    }
    )
    console.log("application submitted successfully");
    let data = await response.json();
   
    if(response.status === 200){
        alert ('application submitted successfully')
    }
    else{
      alert("Invalid credentials")
    }

  }

  const navigate = useNavigate()
  useEffect (()=>{
    const access = localStorage.getItem('authTokens')
    try{
      if (access){navigate('/logout')}
      else{navigate('/')}
    }
    catch(error){return error}

  },[])


  return (
    <div style={{'background-color': 'gray'}}>
       
        <Row  className='justify-content-center pt-5 mt-5'>
    
        <Col lg={6}>
      
        <h2 className='mb-5' >Register Your Company</h2>
        <Form onSubmit={application}>
        <Form.Group style={{'float':'left'}} className="col-lg-5 mx-1" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" />       
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 mx-1" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="Address" />       
      </Form.Group>

      <Form.Group  style={{'float':'left'}} className="col-lg-5 mx-1" >
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' />       
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 mx-1">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" name="state"/>       
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 m-1" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 m-1">
        <Form.Label>Phone no.</Form.Label>
        <Form.Control type="tel" name="phone" />
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-10 m-2">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" name="companyname"/>       
      </Form.Group>

      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your Team</Form.Label>
        <Form.Control as="textarea" rows={3} name="describtion_on_team"/>
      </Form.Group>   

      
      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your Company</Form.Label>
        <Form.Control as="textarea" rows={3} name="describtion_on_company"/>
      </Form.Group>
   

      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your Products</Form.Label>
        <Form.Control as="textarea" rows={3} name="describtion_on_products"/>
      </Form.Group>

    <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Describe about problem</Form.Label>
        <Form.Control as="textarea" rows={3} name="describe_problem" />
      </Form.Group> 


    <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your problem</Form.Label>
        <Form.Control as="textarea" rows={3} name="unique_about_solution" />
      </Form.Group> 


    <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your value proportion for customer</Form.Label>
        <Form.Control as="textarea" rows={3} name="value_proportion_for_customer" />
      </Form.Group> 


    <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>who is your compatator and what is compatator advantages </Form.Label>
        <Form.Control as="textarea" rows={3} name="advantage_competative" />
      </Form.Group>

      
    <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Explain your revenue model </Form.Label>
        <Form.Control as="textarea" rows={3} name="revenue_model" />
      </Form.Group> 

      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label> what is potantial market size of the product</Form.Label>
        <Form.Control as="textarea" rows={3} name="market_product_size" />
      </Form.Group> 


      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>How you market your product and service</Form.Label>
        <Form.Control as="textarea" rows={3} name="how_market" />
      </Form.Group> 
{/* 
    <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2">
      <Form.Select  aria-label="Default select example" name='incubation_type'>
      <option>Type</option>
      <option value="Physicalincubation">Physical Incubation</option>
      <option value="Virtualincubation">Virtual Incubation</option>    
    </Form.Select>
    </Form.Group>  */}

    <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2">
    <div  name="" class="form-check">
  <input value="Physicalincubation" class="form-check-input" type="radio" name='incubation_type' id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Physicalincubation
  </label>
</div>
<div class="form-check">
  <input value="Virtualincubation" class="form-check-input" type="radio" name='incubation_type' id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
  Virtualincubation
  </label>
</div>
</Form.Group> 

    
      <Button  style={{'float':'left'}} className="m-5" variant="dark" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
      </Row>

      
    </div>
  )
}

export default Logout