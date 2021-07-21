/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { UserContext } from "../App"

const editProduct = () => {

        const history = useHistory()
        const {state, dispatch } = useContext(UserContext)
        const [product , setProduct] = useState({
            productName : "" , productCategory : '' , productPrice : "" 
        })
        const [findProduct , setFindPreduct] = useState({
           _id : "" , productName : "" , productCategory : '' , productPrice : "" 
        })
        const cancle = () => {
            history.push('/allproduct')
        }
        const heandlRecord = (e) => {
            const name = e.target.name
            const value = e.target.value
            setFindPreduct({...findProduct,[name] : value})
        }
        const stateValue = async () => {
            
           const res = await fetch(`/findOneProduct/${state}`,{
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Context-type" : "application/json"
                },
                credential : 'include'
                })
                const data = await res.json()
                if(data.status === 200) {
                    console.log(data.data)
                    setFindPreduct(data.data)
                } else {
                    console.log('console');
                }
        }
        const editProduct = async () => {
            const {productName , productCategory , productPrice} = findProduct
            console.log(productName , productCategory , productPrice)
            const res = await fetch(`/productEdit/${state}`, {
                method : "PATCH",
                headers : {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    '_method': 'PATCH',
                    'Authorization': ''
                },body : JSON.stringify({
                    productName , productCategory  , productPrice 
                })
            })
            const data = await res.json()
            if(data.status === 200) {
                console.log( 'NIKUL'+ data);
                history.push('/allproduct')
            } else {
                console.log('somthing went wrong')
            }
        }
     useEffect(() => {
         stateValue()
     },[state])
        return (
        <>
        <section className="signup">
        <div className="container mt-5">
            <div className="signup-content ">
                <div className="signup-form">
                    <h2 className="form-title">Edit Product </h2><br />
                    <form method="POST"  className="regiester-form" id="register-form">
                        
                        <div className="form-group">
                            <lable>Product Name :</lable>
                            <br /> <input type="text" value={findProduct.productName} name="productName"  placeholder="Product Name"
                            onChange={heandlRecord} /> 
                        </div>
                        <div className="form-group">
                            <lable>Product Categort :</lable>
                            <br /> <input type="text" value={findProduct.productCategory} name="productCategory" placeholder="Product Category"
                            onChange={heandlRecord} /> 
                        </div><br />                                  
                        <div className="form-group">
                            <lable>Product Price :</lable>
                            <br /> <input type="text" name="productPrice"  value={findProduct.productPrice || ""}  placeholder="Product Price"
                            onChange={heandlRecord} /> 
                        </div><br />
                        <div className="form-group form-button">
                        <button type="button" onClick={editProduct} name="send" >Send</button>
                        </div>  
                        
                         <div className="form-group form-button">
                         <button type="submit" name="cancle"  onClick={cancle} >Cancle</button>
                        </div>
                    </form> 
                    </div>
                </div>
            </div>
        </section>        
        </>
    )
}

export default editProduct