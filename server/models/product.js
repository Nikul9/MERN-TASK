const mongoose = require('mongoose')
const constant = require('../utils/constant')

const Schema = {
    productName : {
        type : String ,
        reuire : true
    },
    productCategory : {
        type : String,
        reuire : true
    },
    productPrice : {
        type : String,
        require : true
    }
}

const productSchema = new mongoose.Schema(Schema)

const product = mongoose.model(constant.DB_MODEL_REF.PRODUCT,productSchema)

module.exports = product