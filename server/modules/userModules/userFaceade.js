const service = require('./userServce')
const resHndlr  = require('../../handlers/responseHandler')
const constant = require('../../utils/constant')
const userConstant = require('./userContext')

const addUser = async (req) => {
    return service.addUser(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const loginUser = async (req) => {
    return service.loginUser(req).then((data) => {
        if(data && data === 1) {
            
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        }  else {
                return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
            }
        } , (error) => {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
        })           
}

const logOut = async (req) => {
    return service.logOut(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
                return resHndlr.requestResponse(true,constant.HTTP_CODE.ok,userConstant.MESSAGE.getSuccess,data)
            }
        } , (error) => {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
        })           
}

const editUser  = async (req) => {
    return service.editUser(req).then((data) => {
        if(data && data == 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

const adminLogin = async (req) => {
    return service.adminLogin(req).then((data) => {
        if(data && data == 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

const adminEdit = async (req) => {
    
    return service.adminEdit(req).then((data) => {
        if(data && data == 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

const adminCreateUser = async (req) => {
    return service.adminCreateUser(req).then((data) => {
        if(data  && data == 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
} 

const adminDelete = async (req) => {
    return service.adminDelete(req).then((data) => {
        if(data && data == 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        } 
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

const AllUser = async (req) => {
    return service.AllUser(req).then((data) => {
        if(data && data == 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        } 
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

const findOneUser = async (req) => {
    return service.findOneUser(req).then((data) => {
        if(data && data == 1) {
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        } 
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

const cheakeAuth = async (req) => {
    return service.cheakeAuth(req).then((data) => {
        if(data && data == 1) {
            log('in fcade 1')
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        } 
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

const adminAuth = async (req) => {
    return service.adminAuth(req).then((data) => {
        if(data && data == 1) {
            log('in fcade 1')
            return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,data)
        } else {
            return resHndlr.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        } 
    } , (error) => {
        return resHndlr.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    })
}

module.exports = {
    addUser,
    loginUser,
    editUser,
    adminLogin,
    adminEdit,
    adminCreateUser,
    adminDelete,
    AllUser,
    logOut,
    findOneUser,
    cheakeAuth,
    adminAuth
}