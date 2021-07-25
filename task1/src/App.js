import './App.css';
import React, { createContext, useReducer } from 'react'
import Header from './components/headers'
import Login from './components/login'
import {Route} from 'react-router-dom'
import AllUser from "./components/AllUser"
import AllProduct from "./components/priduct"
import Regiester from "./components/regiester"
import EditProduct from "./components/EditProduct"
import EditUser from './components/EditUser'
import adminLogin from "./components/adminLogin"
import AddProduct from './components/addProduct';
import Logout from './components/logout'
import {reducer} from './components/reduser/reduser'
import {initialState} from './components/reduser/reduser'
import Home from './components/Home'
import AdminCreateUser from './components/AdminCreateUser'
export const UserContext = createContext();
export const NavBar = createContext()

function App() {
  const [state , dispatch] = useReducer( reducer , initialState )
  return (
    <>
    
      
   
    <UserContext.Provider value={{state,dispatch}}> 
      <Header />
      <Route exact path="/" component={Login} /> 
      <Route path="/alluser"      component={AllUser} />
      <Route path="/allproduct"      component={AllProduct} />  
      <Route path="/regiester"    component={Regiester} /> 
      <Route path="/editproduct"  component={EditProduct} /> 
      <Route path="/edituser"     component={EditUser} />       
      <Route path="/adminLogin"   component={adminLogin} />
      <Route path="/logout"   component={Logout} /> 
      <Route path="/addproduct"   component={AddProduct} /> 
      <Route path="/admincreateuser"   component={AdminCreateUser} /> 
      <Route path="/home"   component={Home} /> 
    </UserContext.Provider> 
    </>
  );  
}

export default App;