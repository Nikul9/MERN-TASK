const service = require('./productService')
const resHendler = require('../../handlers/responseHandler')
const constant = require('../../utils/constant') 
productcontext = require('./productContext') 

const newProduct = async (req) => {
    return service.newProduct(req).then((data) => {
        if(data && data == 1) {
            return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest , productcontext.MESSAGE.addError ,data) 
        } else {
            return resHendler.requestResponse(true, constant.HTTP_CODE.ok,productcontext.MESSAGE.addSuccess ,data) 
        }
    }, (error) => {
        return resHendler.requestResponse(false, constant.HTTP_CODE.ok,productcontext.MESSAGE.addSuccess ,data) 
    })
}

const productEdit = async (req) => {
    return service.productEdit(req).then((data) => {
        if(data && data == 1) {
            return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest , productcontext.MESSAGE.addError ,data) 
        } else {
            return resHendler.requestResponse(true, constant.HTTP_CODE.ok,productcontext.MESSAGE.addSuccess ,data) 
        }
    } , (error) => {
        return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest,productcontext.MESSAGE.addError ,error)
    })
}

const productDelete = async (req) => {
    return service.productDelete(req).then((data) => {
        if(data && data == 1) {
            return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest , productcontext.MESSAGE.addError ,data) 
        } else {
            return resHendler.requestResponse(true, constant.HTTP_CODE.ok,productcontext.MESSAGE.addSuccess ,data) 
        }
    } , (error) => {
        return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest,productcontext.MESSAGE.addError ,error)
    })
}

const AllProduct = async (req) => {
    return service.AllProduct(req).then((data) => {
        if(data && data == 1) {
            return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest , productcontext.MESSAGE.addError ,data) 
        } else {
            return resHendler.requestResponse(true, constant.HTTP_CODE.ok,productcontext.MESSAGE.addSuccess ,data) 
        }
    } , (error) => {
        return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest,productcontext.MESSAGE.addError ,error)
    })
}

const findOneProduct = async (req) => {
    return service.findOneProduct(req).then((data) => {
        if(data && data == 1) {
            return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest , productcontext.MESSAGE.addError ,data) 
        } else {
            return resHendler.requestResponse(true, constant.HTTP_CODE.ok,productcontext.MESSAGE.addSuccess ,data) 
        }
    } , (error) => {
        return resHendler.requestResponse(false, constant.HTTP_CODE.badRequest,productcontext.MESSAGE.addError ,error)
    })
}

module.exports = {
    newProduct,
    productEdit,
    productDelete,
    AllProduct,
    findOneProduct
}