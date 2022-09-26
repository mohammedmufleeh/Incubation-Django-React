import { useContext, createContext, useState } from "react";
import AuthContext from "../Context/AuthContext";

const AppContext = createContext();
export default AppContext

export const AppProvider = ({ children }) => {
  
    const [first, setFirst] = useState([])
    let {authTokens,} = useContext(AuthContext)
    let AppList = async(e) => {
        // e.preventDefault()
        console.log('soraaaaaaaaaa')
        let response = await fetch('http://127.0.0.1:8000/api/admin/view_app/',
    
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log('singoooo')
        console.log (data)
       
        if(response.status === 200){
            setFirst (data)
    
        }
        else{
          alert("Invalid credentials")
        }
    
      }

      const [home, setHome] = useState([])
      let AdminHome = async(e) => {
        // e.preventDefault()
        console.log('eeeeeeeeeeeeeee')
        let response = await fetch('http://127.0.0.1:8000/api/admin/AdminHome/',
    
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log('singoooo')
        console.log (data)
       
        if(response.status === 200){
            setHome (data)
    
        }
        else{
          alert("Invalid credentials")
        }
    
      }



     const [second, setSecond] = useState([])
      let AppListAprd = async(e) => {
        // e.preventDefault()
        console.log('eeeeeeeeeeeeeee')
        let response = await fetch('http://127.0.0.1:8000/api/admin/view_apps/',
    
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log('singoooo')
        console.log (data)
       
        if(response.status === 200){
            setSecond (data)
    
        }
        else{
          alert("Invalid credentials")
        }
    
      }



      const [Third, setThird] = useState([])
      let AppListRejected = async(e) => {
        // e.preventDefault()
        console.log('eeeeeeeeeeeeeee')
        let response = await fetch('http://127.0.0.1:8000/api/admin/view_appss/',
    
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log('singoooo')
        console.log (data)
       
        if(response.status === 200){
            setThird (data)
            AppList()
        }
        else{
          alert("Invalid credentials")
        }
    
      }

    let edit_app = async(id) => {
        // e.preventDefault()
        console.log('soraaaaaaaaaa')
        let response = await fetch(`http://127.0.0.1:8000/api/admin/edit_appA/${id}/`,
    
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
          body: JSON.stringify({'status':'Approved'})
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log('singoooo')
        console.log (data)
       
        if(response.status === 200){
            AppListRejected()
            AppListAprd()
            AppList()
        }
        else{
          alert("Invalid credentials")
        }
    
      }


    let edit_appR = async(id) => {
        // e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/api/admin/edit_appR/${id}/`,
    
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
          body: JSON.stringify({'status':'Rejected'})
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
            AppListRejected()
            AppListAprd()
        }
        else{
          alert("Invalid credentials")
        }
    
      }



      let app_delete = async(id) => {
        // e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/api/admin/app_delete/${id}/`,
    
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
         
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
            AppListRejected()
            AppListAprd()
        }
        else{
          alert("Invalid credentials")
        }
    
      }


      const [Applist, setAppList] = useState([])
      let AppListViews = async(id) => {
        console.log('ssss'+id)
        // e.preventDefault()
        console.log('eeeeeeeeeeeeeee')
        let response = await fetch(`http://127.0.0.1:8000/api/admin/view_application/${id}/`,
        
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        console.log(id)
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
            setAppList (data)
            console.log(id)
        }
        else{
          alert("Invalid credentials")
        }
    
      }


      const [allapp, setAllApp] = useState([])
      let Allapp = async() => {
        // e.preventDefault()
        console.log('r ,dfghzsdf nff ')
        let response = await fetch('http://127.0.0.1:8000/api/admin/allapp/',
        
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
          setAllApp (data)
        }
        else{
          alert("Invalid credentials")
        }
    
      }
// Slot----------------------------------------------------------------------------------------------------------------------------------

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);

      const [slot, setSlot] = useState([])
      let slots = async() => {
        // e.preventDefault()
        console.log('eddassffsfsfff')
        let response = await fetch('http://127.0.0.1:8000/api/admin/slotes/',
        
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
          setSlot (data)
        }
        else{
          alert("Invalid credentials")
        }
    
      }



      let ChengeAppSlot = async(id) => {
        // e.preventDefault()
        console.log('hhhhhh'+id)
        let response = await fetch(`http://127.0.0.1:8000/api/admin/AppGetout/${id}/`,
        
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
          body: JSON.stringify({'slotactive':'True'})
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
          slots()
          AppListAprd()
        }
        else{
          alert("Invalid credentials")
        }
    
      }


      let AddSlot = async(key,Number) => {
        // e.preventDefault()
        console.log('hhhhhh'+Number)
        console.log('key'+ key)
        let response = await fetch(`http://127.0.0.1:8000/api/admin/ChengeSlot/${key}/`,
        
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
          body: JSON.stringify({'Active':'True', 'company':Number})
        }
        )
        console.log("Form submitted vcvcvcvcvsuccessfully");
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
          slots()
          handleClose()
        }
        else{
          alert("Invalid credentials")
        }
    
      }

     
      
      // Users----------------------------------------------------------------------------------------------

      
      const [user, setUser] = useState([])
      let users = async() => {
        // e.preventDefault()
        console.log('r ,dfghzsdf nff ')
        let response = await fetch('http://127.0.0.1:8000/api/admin/getUsers/',
        
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
        }
        )
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
          setUser (data)
        }
        else{
          alert("Invalid credentials")
        }
    
      }
      
      let blockUser = async(id) => {
        // e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/api/admin/UserBlock/${id}/`,
    
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
          body: JSON.stringify({'is_active':'false'})
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
          
          users()
        }
        else{
          alert("Invalid credentials")
        }
    
      }

        
      let unblockUser = async(id) => {
        // e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/api/admin/unUserBlock/${id}/`,
    
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+String(authTokens.access),
          },
          body: JSON.stringify({'is_active':'True'})
        }
        )
        console.log("Form submitted successfully");
        let data = await response.json();
        console.log (data)
       
        if(response.status === 200){
          handleClose()
          
          users()
        }
        else{
          alert("Invalid credentials")
        }
    
      }

      let contextData = { 
        AppList: AppList,
        first: first,
        AppListAprd: AppListAprd,
        second: second,
        AppListRejected: AppListRejected,
        Third: Third,
        edit_app: edit_app,
        edit_appR: edit_appR,
        app_delete: app_delete,
        AppListViews: AppListViews,
        Applist: Applist,
        Allapp: Allapp,
        allapp: allapp,
        slots: slots,
        slot: slot,
        ChengeAppSlot: ChengeAppSlot,
        AddSlot:AddSlot,
        users:users,
        user: user,
        blockUser: blockUser,
        unblockUser:  unblockUser,
        handleClose: handleClose,
        show: show,
        setShow: setShow,
        AdminHome: AdminHome,
        home: home,




    
      }
      return (
        <AppContext.Provider value={contextData} >
          {children}
        </AppContext.Provider>
      );


}