/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { UserContext } from "../App"
import Pagination from './pagination'

const allUser = ({match}) => {
    
    const pageNumber = match.params.pageNumber || 1;
    const [totalItem , settotalItem] = useState()
    const [ currentPage , setcurrentPage] = useState()
    const [ pageSize , setpageSize] =  useState();
    const [user , setUser] = useState([])
    const history = useHistory()
    const {state, dispatch } = useContext(UserContext)
        const UpdateUser = (e) => {
            const userId = e.target.value
            dispatch({type : "USER_ID", payload : userId })
            history.push('/edituser')
    } 
    const allUserValue = async () => {
        const res = await fetch(`/AllUser?page=${currentPage}`,{
            method : "GET",
            headers : {
                Accept : "application/json",
                "Content-type" : "application/json"
            },
            credentials : "include"
        })
        const data = await res.json()
        if(data.status === 200) {
            console.log(data.data);
            setUser(data.data.ussers)
            setpageSize(data.data.pageSize)
            settotalItem(data.data.total)
        } else {
            history.push('/adminLogin')
        }
    }
    const deleteUser = async(e) => {
        if (confirm('Are you sure you want to Delete this Record ?')) {
            // Save it!
            const id = e.target.value
            console.log(id)
            const res = await fetch(`/adminDelete/${id}`,{
                  method : "DELETE"              
            })
                window.location.reload(false)
        
          } else {
            // Do nothing!
            console.log('RETURN');
          }   
    }
    useEffect(() => {
        allUserValue()
    },[currentPage])
    return (
        <>
        
        <div className="col-sm-9"></div>
        <table className="table table-codensed table-hower">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Country</th>
                    <th>City</th>
                    <th colspan="2">Actions</th>
                </tr>
            </thead>
            {
                user.map(res => <tbody>
                    <tr class="overflow-auto"> 
                        <th>{res.firstName}</th>
                        <th>{res.lastName}</th>
                        <th>{res.email}</th>
                        <th>{res.phone}</th>
                        <th>{res.country}</th>
                        <th>{res.city}</th>
                        <th><button class="btn btn-primery" value={res._id} onClick={UpdateUser} >Update</button></th>
                        <th><button class="btn btn-primery" value={res._id} onClick={deleteUser}  >Delete</button></th>
                    </tr>
                </tbody>)
            }
        </table>  
        <Pagination totalItem={totalItem} pageSize={pageSize} pageNumber={currentPage} currentPage={setcurrentPage}  />
        </>
    )
}

export default allUser