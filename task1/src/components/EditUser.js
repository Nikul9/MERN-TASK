/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { UserContext } from "../App"

const editUser = () => {
    const [findUser , setFindUser] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        country: '',
        city: '',
        role: ''})
    
    const { state , dispach } = useContext(UserContext)
    const history = useHistory()
        const cancle = () => {
            history.push('/alluser')
        }    
        const findUsers = async () => {
        const res = await fetch(`/findOneUser/${state}`,{
            method : "GET",
            headers : {
                Accept : "application/json",
                "Context-type" : "application/json"
            },
            credential : 'include'
        }) 
       
        const data = await res.json() 
        if(data.status === 200) {
            console.log('success');
            console.log( data);
            setFindUser(data.data[0])
        } else {
            console.log('success')
        }
    }
    useEffect(() => {
        findUsers()
        
    },[])
    const heandlerInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFindUser({...findUser , [name] : value})
        console.log(findUser);
    }
    const updateUser = async () => {
        const {firstName , lastName , email , country , city , phone} = findUser
        const res = await fetch(`/adminEdit/${state}`, {
            method : "PATCH",
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                '_method': 'PATCH',
                'Authorization': ''
            },body : JSON.stringify({
                firstName , lastName , email , country , city , phone
            })
        })
        const data = await res.json()
        if(data.status === 200) {
            console.log( 'NIKUL'+ data);
            history.push('/alluser')
        } else {
            console.log('somthing went wrong')
        }
    }
    return (
        <>
            <h1>{state}</h1>
            <section className="signup">
        <div className="container mt-5">
            <div className="signup-content ">
                <div className="signup-form">
                    <h2 className="form-title">Edit User </h2><br />
                    <form method="POST"  className="regiester-form" id="register-form">
                        
                        <div className="form-group">
                            <lable>First Name :</lable>
                            <br /> <input type="text"  name="firstName"  placeholder="firstName"
                            value={findUser.firstName} onChange={heandlerInput} /> 
                        </div>
                        <div className="form-group">
                            <lable>Last Name :</lable>
                            <br /> <input type="text"  name="lastName" placeholder="Product Category"
                            value={findUser.lastName} onChange={heandlerInput} /> 
                        </div><br />                                  
                        <div className="form-group">
                            <lable>Email :</lable>
                            <br /> <input type="text" name="email"    placeholder="Product Price"
                            value={findUser.email} onChange={heandlerInput} /> 
                        </div><br />
                        <div className="form-group">
                            <lable>Mobile :</lable>
                            <br /> <input type="text" name="phone" placeholder="Product Price"
                            value={findUser.phone} onChange={heandlerInput} /> 
                        </div><br />
                        <div className="form-group">
                            <lable>Country :</lable>
                            <br /> <input type="text" name="country"  placeholder="Product Price"
                            value={findUser.country} onChange={heandlerInput} /> 
                        </div><br />
                        <div className="form-group">
                            <lable>City :</lable>
                            <br /> <input type="text" name="city" placeholder="Product Price"
                            value={findUser.city} onChange={heandlerInput} /> 
                        </div><br />
                        <div className="form-group form-button">
                        <button type="button"  name="send" onClick={updateUser}>Send</button>
                        </div>  
                        
                         <div className="form-group form-button">
                         <button type="button" name="cancle" onClick={cancle} >Cancle</button>
                        </div>
                    </form> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default editUser
