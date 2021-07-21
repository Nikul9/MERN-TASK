/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import {NavLink} from "react-dom"
import {useHistory} from 'react-router'

const AdminCreateUser = () => {
   
    const history = useHistory()
    const [user , setUser] = useState({
        firstName : "", lastName : "" , email : "" , password : "" , country : "" , city : "" , role : "" , phone : ""
    })
    const handelInputs = (e) => {
        let  name = e.target.name
        let value = e.target.value
        setUser({...user , [name] : value})
        console.log(user)
    }
    const postData = async (e) => {
        const {firstName , lastName , email , phone , password , country , city , role } = user
        const res = await fetch('/adminCreateUser', {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                firstName , lastName , email , phone , password , country , city , role 
            })
        }) 
        const data = await res.json()
        console.log(data)
        if(data.status === 200) {
            window.alert('success');
            history.push('/alluser')
        }else {
            window.alert('try')
        }
    }
    const adminAuth = async () => {

        console.log('nikul');
        const res = await fetch('/adminAuth',{
            method  : "GET",
            headers : {
                Accept : "application/json",
                "Context-type" : "application/json"
            },
            credentials : 'include'
        })
        const data = await res.json();
        if(data.status === 200) {
            console.log('success')
        } else {
            console.log('asdasd')
            history.push('/adminLogin')
        }
     }
    useEffect(() => {
        console.log(";asdasd");
        adminAuth()
    })
    return (
        <>
        <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content ">
                        <div className="signup-form">
                            <h2 className="form-title">Admin Create User </h2><br />
                            <form method="POST" className="regiester-form" id="register-form">
                                <div className="form-group">
                                    <lable htmlfor="name">First Name :</lable>
                                    <br /> <input type="text" name="firstName" placeholder="First Name"  
                                    onChange={handelInputs} /> 
                                </div>
                                <div className="form-group">
                                    <lable htmlfor="name">Last Name :</lable>
                                    <br /> <input type="text" name="lastName" placeholder="Last Name" 
                                    onChange={handelInputs}  /> 
                                </div>
                                <div className="form-group">
                                    <lable htmlfor="email">Email :</lable>
                                    <br /> <input type="text" name="email" placeholder="Email"
                                    onChange={handelInputs} /> 
                                </div>
                                <div className="form-group">
                                    <lable htmlfor="Phone Number">Phone Number :</lable>
                                    <br /> <input type="text" name="phone" placeholder="Phone Number" 
                                    onChange={handelInputs} /> 
                                </div>
                                <div className="form-group">
                                    <lable htmlfor="password">Password :</lable>
                                    <br /> <input type="text" name="password" placeholder="password"
                                    onChange={handelInputs} /> 
                                </div>
                                <div className="form-group">
                                    <lable htmlfor="confpassword">Country :</lable>
                                    <br /> <input type="text" name="country" placeholder="Country" 
                                    onChange={handelInputs} /> 
                                </div>
                                <div className="form-group">
                                    <lable htmlfor="confpassword">City :</lable>
                                    <br /> <input type="text" name="city" placeholder="city" 
                                    onChange={handelInputs} /> 
                                </div>
                                <div className="form-group">
                                    <lable htmlFor="work">Role :</lable>
                                    <br /> <input type="text" name="role" placeholder="role" 
                                    onChange={handelInputs} /> 
                                </div>
                                <div className="form-group form-button">
                                    <input type="button" onClick={postData} name="signup" value="regiester" />
                                </div>  
                                <div className="form-group form-button">
                                    <span>If you are allready regiester   :  </span>
                                    <button type="button" name="login" value="Login">Login</button>
                                </div>  
                            </form>  
                        </div>
                    </div>
                </div>
          </section>     
        </>
    )
}

export default AdminCreateUser