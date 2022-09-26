import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext from '../Context/AuthContext';
import { useNavigate,Link } from 'react-router-dom';


function Nave() {
  let {userLogout,user} = useContext(AuthContext)

  return (
    <div style={{'background-color': 'silver'}}>

<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Welcome{user.email}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button type='submit' className='logout_button, login' variant="outline-dark" onClick={userLogout}>Logout</Button>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Nave