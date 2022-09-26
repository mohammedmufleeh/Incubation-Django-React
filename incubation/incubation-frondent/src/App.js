import React from 'react';
import Loginpage from './pages/Loginpage';
import Logoutpage from './pages/Logoutpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'  
import { AuthProvider } from './Context/AuthContext';
import Adminpage from './pages/Adminpage'
import Signupage from './pages/Signuppage';
import { AppProvider } from './Context/AppContext';
import Applistpage from './pages/Applistpage';
import AllApp from './components/AllApp';
import Slotpage from './pages/Slotpage';
import Userspage from './pages/Userspage';
import ApprvdListpage from './pages/ApprvdListpage';
import Pendingpage from './pages/Pendingpage';
import Rejectedpage from './pages/Rejectedpage';
import PrivetRouts from './Utils/PrivetRouts';
import AdminprivetRouts from './Utils/AdminprivetRouts';
import Allapppage from './pages/Allapppage';
import OnlyAdminPrivetRoutes from './Utils/OnlyAdminPrivetRoutes';
import ValidSignup from './components/ValidSignup';

function App() {
  return (
  <BrowserRouter>
  <AuthProvider>
    <AppProvider>
    <Routes>
      <Route path='/' element ={<Loginpage/>} />
      <Route path='/usersignup' element ={<ValidSignup/>} />

      
      <Route element ={<PrivetRouts/>}>

      <Route element ={<OnlyAdminPrivetRoutes/>}> 
        <Route path='/logout' element ={<Logoutpage/>} />
      </Route>  

      <Route path='/admin' element ={<Adminpage/>} />

    <Route element={<AdminprivetRouts/>} >
      
      <Route path='/pending' element ={<Pendingpage/>} />
      <Route path='/Approved' element ={<ApprvdListpage/>} />
      <Route path='/Rejected' element ={<Rejectedpage/>} />
      <Route path='/Applist/:id' element ={<Applistpage/>} />
      <Route path='/slotbooking' element ={<Slotpage/>} />
      <Route path='/Users' element ={<Userspage/>} />
      <Route path='/masterhome' element ={<Allapppage/>} />
    </Route>
    </Route>
    </Routes>
    </AppProvider>
  </AuthProvider>
  </BrowserRouter>
 
  );
}

export default App;
