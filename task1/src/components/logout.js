/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext , useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext , NavBar } from "../App"

const logout = () => {
    const history = useHistory()
    useEffect(() => {
        fetch('/logout',{
            method : "DELETE",
            headers : {
                Accept : "application/json",
                "Context-type" : "application/json"
            },
            credential : 'include'
        }).then((result) => {
            if(result.status === 200) {
               
                history.push('/')
            } else {
                const error = new Error(result.error)
            }
        }).catch((e) => {
            console.log(e);
        })
    })    
    return (
            <>

            </>
        )
}
export default logout