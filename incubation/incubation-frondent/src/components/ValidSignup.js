import { Link } from 'react-router-dom';
import "./Login.css";
import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import AuthContext from "../Context/AuthContext";
import {useFormik} from 'formik';



export default function Signup() {
  let {userSignup} =useContext(AuthContext)

  const validate = values => {
    const errors = {};
    if (!values.name){
        errors.name = "Requierd";
    }
    else if(values.name.lenght > 8){
        errors.name = "must be 8 characters or less";
    }
    
    if (!values.email){
        errors.email = "*Required";
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "Invalid Email Address";
    }
    if(!values.password){
        errors.password = "Required";
    }
    else if(!/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(values.email)){
        errors.password = "minimum 8 characters";
    }
    // else if(values.password.lenght < 4){
    //     errors.password = "inimum 4 characters";
    // }
    return errors;
  }
  const formik = useFormik({
    initialValues : {
        name : '',
        email : '',
        password : '',
    },
    validate,
    userSignup
  });
  console.log(formik.values);
  return (
    <div className='logout'>
    <form className='login_form' onSubmit={userSignup } >
                    <h1>SignUp Here</h1>

                        <input type='text'
                        placeholder='Name'  
                        name='name' required autoComplete='off'
                        onChange={formik.handleChange} value ={formik.values.name} onBlur = {formik.handleBlur}
                        />
                        {
                           formik.touched.name && formik.errors.name ? <span style={{'color':'red'}}>{formik.errors.name}</span>: null
                        }
                    
                        <input type='email' 
                        placeholder='Email' 
                        name='email' required autoComplete='off'
                        onChange={formik.handleChange}  value ={formik.values.email} onBlur = {formik.handleBlur}
                        />
                        {
                            formik.touched.email && formik.errors.email ? <span style={{'color':'red'}}>{formik.errors.email}</span>: null
                        }

                        <input type='password'
                        placeholder='Password' 
                        name="password" required autoComplete='off'
                        onChange={formik.handleChange}  value ={formik.values.password} onBlur = {formik.handleBlur}
                        />
                        {
                            formik.touched.password && formik.errors.password ? <span style={{'color':'red'}}>{formik.errors.password}</span>: null
                        }


         <Button type='submit' className='logout_button' variant="outline-primary">SignUp</Button><br/>
     </form>
     <Link to='/'> SignIn</Link> 
    </div>
  );
};