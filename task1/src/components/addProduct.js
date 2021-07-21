/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'


const addProduct = () => {
    
    const history = useHistory()
    const [newProduct, setNewProduct] = useState({
        productName : "" , productCategory : "" , productPrice : ''
    })
    const heandelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewProduct({...newProduct , [name] : value})
        console.log(newProduct)
    }
    const addNewProduct = async () => {
        const {productName , productCategory , productPrice} = newProduct
        console.log( 'your value'+ productName , productCategory , productPrice)
        const res = await fetch('/newProduct', {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                productName , productCategory , productPrice 
            })
        }) 
        const data = await res.json()
        if(data.status === 200 ) {
            console.log(data.data);
            history.push('/allproduct')
        } else {
            console.log('error');
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
        } else {
            console.log('data')
            history.push('/')
        }
    }
    useEffect(() => {
        cheakAuth()
    })
    return (
        <>
        <section className="signup">
        <div className="container mt-5">
            <div className="signup-content ">
                <div className="signup-form">
                    <h2 className="form-title">Add Product </h2><br />
                    <form method="POST"  className="regiester-form" id="register-form">
                        
                        <div className="form-group">
                            <lable>Product Name :</lable>
                            <br /> <input type="text" name="productName" placeholder="Product Name"
                            onChange={heandelInput} /> 
                        </div>
                        <div className="form-group">
                            <lable>Product Categort :</lable>
                            <br /> <input type="text" name="productCategory" placeholder="Product Category"
                            onChange={heandelInput} /> 
                        </div><br />                                  
                        <div className="form-group">
                            <lable>Product Price :</lable>
                            <br /> <input type="text" name="productPrice" placeholder="Product Price"
                            onChange={heandelInput} /> 
                        </div><br />
                        <div className="form-group form-button">
                        <button type="button" onClick={addNewProduct} >Send</button>
                        </div>  
                        
                         <div className="form-group form-button">
                         <button type="button" name="cancle" >Cancle</button>
                        </div>
                    </form> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default addProduct