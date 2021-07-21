/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { UserContext } from "../App"

const allProduct = () => {

const history = useHistory()
const [productData , setProduct] = useState([])
const {state, dispatch } = useContext(UserContext)
        const UpdateProduct = (e) => {
            const productId = e.target.value
            dispatch({type : "PRODUCT_ID",  payload : productId })
            history.push('/editproduct')
        } 
        const deleteProduct = async(e) => {
            const id = e.target.value
            console.log(id)
            const res = await fetch(`/deleteProduct/${id}`,{
                  method : "DELETE"              
            })
                window.location.reload(false)
           
        }
        const product = async () => {
        const res = await fetch('/AllProduct',{
            method : "GET",
            headers : {
                Acction : "application/json",
                "Content-type" : "application/json"
            },
            credentials : "include"
        })
        const data = await res.json()
        if(data.status === 200) {
            console.log(data.data);
            const [callData] =  data.data
            console.log([callData]);
            setProduct(data.data)
           
        } else {
            history.push('/')
        }
    }
    
    useEffect(() => {
        product()
    },[])
    return (
        <>
        <div className="col-sm-9"></div>
        <table className="table table-codensed table-hower">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Price</th>
                    <th colspan="2">Actions</th>
                </tr>
            </thead>
            {
                productData.map(res => <tbody>
                    <tr class="overflow-auto"> 
                        <th>{res._id}</th>
                        <th>{res.productName}</th>
                        <th>{res.productCategory}</th>
                        <th>{res.productPrice}</th>
                        <th><button class="btn btn-primery" onClick={UpdateProduct} value={res._id} >Update</button></th>
                        <th><button class="btn btn-primery" onClick={deleteProduct} value={res._id} >Delete</button></th>
                    </tr>
                </tbody>)
            }
        </table>    
        </>
    )
}

export default allProduct