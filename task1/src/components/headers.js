/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect }  from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const headers = () => {
  
const RegMenu = () => { 
      return (
        <> 
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Login</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/regiester">Regiester</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/admincreateuser">AdminUser</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/alluser">Users</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/allproduct">Product</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/addproduct">Add Product</NavLink>
          </li>
        </>
      )
  }
  return (
    <>  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
       
          <ul className="navbar-nav ml-auto">
            <RegMenu />
          </ul>
        </div>
      
    </nav> 
    </>
    )
}  
export default headers