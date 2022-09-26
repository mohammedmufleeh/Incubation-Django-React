import React,{useContext} from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'


function OnlyAdminPrivetRoutes() {

    let {authTokens} = useContext(AuthContext)
   
    return authTokens.isAdmin ?  <Navigate to='/admin'></Navigate>: <Outlet/>
}

export default OnlyAdminPrivetRoutes