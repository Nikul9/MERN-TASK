/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext , useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router'
import { UserContext } from "../App"
import { NavBar } from "../App"

const login = () => {
    const [user , setUser] = useState({
        email: "" , password : ""
    })
    
    const loginres = async (e) => {
        e.preventDefault()
        const {email , password} = user
        const res = await fetch('/login',{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({ 
                email , password
            })
        })
        const data = await res.json()
        if(data.status === 200) {
            alert('success')
            history.push('/home')
        } else {
            alert('Error')
        }
    }
    const history = useHistory()    
    const regiester = (e) => {
            e.preventDefault()
            history.push('/regiester');
        }
        const cheakAuth = async () => {
            const res = await fetch('/cheakeAuth', {
                method  : "GET",
                headers : {
                    Accept : "application/json",
                    "Context-type" : "application/json"
                },
                credentials : 'include'
            })
            const data = await res.json()
            if(data.status === 200) {
                console.log(data)
                console.log('success')
                history.push('/home') 
            } else {
                console.log('data')
              
            }
        }
        useEffect(() => {
            cheakAuth()
        })
        const heandlRecord = async (e) => {
            let name = e.target.name
            let value = e.target.value
            setUser({...user , [name] : value})
        }
        const adminlogin = (e) => {
            e.preventDefault()
            history.push('/adminLogin');
        }
        return (
            <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content ">
                        <div className="signup-form">
                            <h2 className="form-title">Login </h2><br />
                            <form method="POST"  className="regiester-form" id="register-form">
                                
                                <div className="form-group">
                                    <lable>Email :</lable>
                                    <br /> <input type="text" name="email" placeholder="Email"
                                    onChange={heandlRecord} /> 
                                </div>
                                <div className="form-group">
                                    <lable>Password :</lable>
                                    <br /> <input type="text" name="password" placeholder="password"
                                    onChange={heandlRecord} /> 
                                </div><br />                                  
                                 <input type="submit" onClick={loginres} name="signup"  /><br />
                                <div className="form-group form-button">
                                <span>For AdminLogin   :  </span>
                                <button type="submit" name="login" onClick={adminlogin} value="regiester">Admin Login</button>
                                </div>  
                                
                                 <div className="form-group form-button">
                                 <span>Create new Account   :  </span>
                                 <button type="submit" name="login" onClick={regiester} value="regiester">Regiester</button>
                                </div>
                            </form> 
                            </div>
                    </div>
                </div>
          </section>
            </>
        )
}

export default login