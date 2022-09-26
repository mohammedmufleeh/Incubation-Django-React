import React,{useContext} from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

function AdminprivetRouts() {
    let {authTokens} = useContext(AuthContext)
    console.log(authTokens)

    return authTokens.isAdmin ? <Outlet/>: <Navigate to='/'></Navigate>
}

export default AdminprivetRouts