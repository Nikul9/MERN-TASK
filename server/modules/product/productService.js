const product = require('../../models/product');
const productData = require('../../models/product') 

const newProduct = async (req) => {
    const product = new productData(req.body)
    const productAdd = await product.save()
    if(!productAdd) {
        return 1;
    } 
    return productAdd;
} 

const productEdit = async (req) => {
    const _id = req.params._id
    
    const product = await productData.findOne({_id})
    if(!product) {
        return 1;
    }
    const update = Object.keys(req.body)
    const allowUpdate = ["productName", "productCategory", "productPrice"];
    const validUpdate = update.every((update) => allowUpdate.includes(update))

    if(!validUpdate) {
        return 1;
    }
    try {
        update.forEach((updates) => product[updates] = req.body[updates])
        const Editproduct = await product.save()
        return Editproduct
    } catch (e) {
        console.log(e);
    }
}

const productDelete = async (req) => {
    const _id = req.params._id
    const product = await productData.findOne({_id})
    if(!product) {
        return 1;
    }
    await product.remove()    
    return product
}

const AllProduct = async (req) => {
    const products = await product.find({})
    return products
}

const findOneProduct = async(req) => {
    const productId = req.params._id
    const findProduct = await product.findOne({_id :productId})
    if(findProduct) {
        return findProduct
    } else {
        return 1
    }
}

module.exports = {
    newProduct,
    productEdit,
    productDelete,
    AllProduct,
    findOneProduct
}