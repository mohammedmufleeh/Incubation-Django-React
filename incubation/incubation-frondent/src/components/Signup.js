import { Link } from 'react-router-dom';
import "./Login.css";
import Button from 'react-bootstrap/Button';
import React, { useState, useContext, useEffect } from 'react';
import AuthContext from "../Context/AuthContext";


export default function Signup() {
    
    const [formValues,setFormValues ] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [errors,setErrors] = useState({})
    const {name,email,password} = formValues;
  let {userSignup} =useContext(AuthContext)

  const handleChange = ({target}) => {
    const {name,value} = target;
    setFormValues({...formValues,[name]: value})
    setErrors({...handleErrors(formValues)})
  }

  
  const handleErrors = (values) => {
    const passwdRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const errors = {};
    const {name,email,password} = values;
    if(!name){
        errors.name = "Name is required";
    }else if(name.length < 4){
        errors.name = "Name should be atleast 4 characters";
    }

    if(!email){
        errors.email = "Email is required";
    }else if(!passwdRegex.test(email)){
        errors.email = "Email is not valid";
    }
    if(!password){
        errors.password = "Password is required";
    }

    return errors;
  }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !password || !email){
            setErrors({
                err: "Enter every Fields"
            })
        }
        
        if((!Object.keys(errors).length) && (name&&email&&password)){
          
        }
    }
 
  return (
    <div className='logout'>
    <form className='login_form' onSubmit={handleSubmit} >
                    <h1>SignUp Here</h1>
                        <span>{errors.err}</span>
                        <input type='text'
                        placeholder='Name'  
                        onChange={handleChange}
                        name='name'  value={name} 
                        />
                        <span>{errors.name}</span>

                        <input type='email' 
                        placeholder='text' 
                        onChange={handleChange}
                        name='email' value={email}
                        />
                         <span>{errors.email}</span>
                        <input type='password'
                        placeholder='Password' 
                        onChange={handleChange}
                        name="password" value={password}
                        />
                         <span>{errors.password}</span>
         <Button type='submit' className='logout_button' variant="outline-primary">SignUp</Button><br/>
     </form>
     <Link to='/'> SignIn</Link> 
    </div>
  );
};