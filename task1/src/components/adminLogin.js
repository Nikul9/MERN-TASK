/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState , useContext, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {regiester} from './regiester'
import { useHistory } from 'react-router'
import { UserContext } from "../App"

const login = () => {
    const history = useHistory()    
    const {state, dispatch } = useContext(UserContext)
        const Userlogin = (e) => {
            e.preventDefault()
            history.push('/');
        }
            const [user , setUser] = useState({
                email: "" , password : ""
            })
            const heandleRecord = (e) => {
                const name = e.target.name
                const value = e.target.value
                setUser({...user, [name] : value })
            }
            const loginres = async (e) => {
                e.preventDefault()
                const {email , password} = user
                const res = await fetch('/adminLogin',{
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
                // dispatch({type : "PRODUCT_ID",  payload : "admin" })
                   history.push('/allUser')
                } else {
                   alert('Error')
                }
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
        },[])
        return (
            <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content ">
                        <div className="signup-form">
                            <h2 className="form-title">Admin Login </h2><br />
                            <form method="POST"  className="regiester-form" id="register-form">
                                
                                <div className="form-group">
                                    <lable>Email :</lable>
                                    <br /> <input type="text" name="email" placeholder="Email" 
                                    onChange={heandleRecord} /> 
                                </div>
                                <div className="form-group">
                                    <lable>Password :</lable>
                                    <br /> <input type="text" name="password" placeholder="password"
                                    onChange={heandleRecord} /> 
                                </div><br />                                  
                                 <input type="submit" name="signup" onClick={loginres} /><br />
                                <div className="form-group form-button">
                                <span>For User Login   :  </span>
                                <button type="submit" name="login" onClick={Userlogin} value="regiester">User Login</button>
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