
import "./Login.css";
import Button from 'react-bootstrap/Button';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import AuthContext from "../Context/AuthContext";



export default function Login() {
  
let {loginUser} = useContext(AuthContext)
  
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [alerts,setAlert] = useState('');
// const {token,setToken} = useContext(TokenContext)
const navigate = useNavigate()
const handleLogin = (event)=>{
  event.preventDefault();
  if (username===''){
      setAlert('username is required')
      console.log(alerts)
  }
  else if (password===''){
      setAlert('password is required')
      console.log(alerts)
  }
  else {
      
      const data = {
          username : username,
          password : password,
      }
      loginUser(username,password)
      }
  }

  useEffect (()=>{
    const access= localStorage.getItem('authTokens')
    try{
      if (access){navigate('/logout')}
    }
    catch(error){return error}

  })


  return (
    <div className='logout'>
    <form className='login_form' onSubmit={handleLogin} >
    <h1>Login </h1>
        <input type='text' 
        placeholder='Email' 
        value={username} onChange={(e) =>{setUsername(e.target.value);setAlert('')} } />
        <input type='password'
         placeholder='Password' 
         value={password} onChange={(e) => {setPassword(e.target.value);;setAlert('')}} />
         <Button type='submit' className='logout_button' variant="outline-dark">SignIn</Button><br/>
     </form>
   <Link to='/usersignup'> SignUp</Link> 
    </div>
  );
};