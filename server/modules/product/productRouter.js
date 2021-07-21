const express = require('express')
const router = express.Router()
const auth = require('../middleware/middleware')
const fcade = require('./productFcade')
const resHeandler = require('../../handlers/responseHandler')

router.route('/newProduct').post(auth ,(req,res) => {
    fcade.newProduct(req).then((result) => {
        console.log(result);
        return resHeandler.successHandler(res,result)
    } , (error) => {
        return resHeandler.errorHandler(res,error)
    })
})

router.route('/productEdit/:_id').patch(auth ,(req,res) => {
    fcade.productEdit(req).then((result) => {
        return resHeandler.successHandler(res,result)
    } , (error) => {
        return resHeandler.errorHandler(res,error)
    })
})

router.route('/deleteProduct/:_id').delete(auth ,(req,res) => {
    fcade.productDelete(req).then((result) => {
        return resHeandler.successHandler(res,result)
    } , (error) => {
        return resHeandler.errorHandler(res,error)
    })
})

router.route('/findOneProduct/:_id').get((req,res) => {
    fcade.findOneProduct(req).then((result) => {
        return resHeandler.successHandler(res,result)
    } , (error) => {
        return resHeandler.errorHandler(res,error)
    })
})

router.route('/AllProduct').get(auth ,(req,res) => {
    fcade.AllProduct(req).then((result) => {
        return resHeandler.successHandler(res,result)
    } , (error) => {
        return resHeandler.errorHandler(res,error)
    })
})

module.exports = router