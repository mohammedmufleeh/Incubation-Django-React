import React,{useContext} from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'


function PrivetRouts() {

    let {authTokens} = useContext(AuthContext)
   
    return authTokens ? <Outlet/>: <Navigate to='/'></Navigate>
  
}

export default PrivetRouts