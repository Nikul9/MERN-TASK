const express =  require('express')
const router =  new express.Router()
const Validation  = require('./userValidation')
const facde       = require('./userFaceade')
const resHeandler = require('../../handlers/responseHandler')
const auth = require('../middleware/middleware')

router.route('/').post([Validation.addUser],(req,res) => {
    facde.addUser(req,res).then((result) => {
       return resHeandler.successHandler(res,result)
    }).catch((error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/login').post((req,res) => {
    facde.loginUser(req).then((result) => {
        resHeandler.loginHandler(res,result)
    }).catch((error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/logout').delete(auth,(req,res) => {
    facde.logOut(req).then((result) => {
        resHeandler.logOutHandler(res,result)
    }).catch((error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/editUser').patch(auth,(req,res) => {
    facde.editUser(req).then((result) => {
        resHeandler.successHandler(res,result)
    } , (error) => {
        console.log(error)
        resHeandler.errorHandler(res,error)
    })
})

router.route('/adminLogin').post(async (req,res) => {
    facde.adminLogin(req).then((result) => {
        resHeandler.loginHandler(res,result)
    } , (error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/adminEdit/:_id').patch(auth,(req,res) => {
    facde.adminEdit(req).then((result) => {
        resHeandler.successHandler(res,result)
    } , (error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/adminCreateUser').post(auth, (req,res) => {
    facde.adminCreateUser(req).then((result) => {
        resHeandler.successHandler(res,result)
    } , (error) =>{
        resHeandler.errorHandler(res,error)
    })
})

router.route('/adminDelete/:_id').delete(auth,(req,res) => {
    facde.adminDelete(req).then((result) => {
        resHeandler.successHandler(res,result)
    }, (error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/AllUser').get(auth , (req,res) => {
    facde.AllUser(req,res).then((result) => {
        resHeandler.successHandler(res,result)
    }).catch((error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/findOneUser/:_id').get(auth , (req,res) => {
    facde.findOneUser(req,res).then((result) => {
        resHeandler.successHandler(res,result)
    }).catch((error) => {
        resHeandler.errorHandler(res,error)
    })
})

router.route('/cheakeAuth').get(auth , (req,res) => {
    facde.cheakeAuth(req).then((result) => {
        resHeandler.successHandler(res,result)
    }).catch((error) => {
        console.log(';in catch')
        resHeandler.errorHandler(res,error)
    })
})

router.route('/adminAuth').get(auth , (req,res) => {
    console.log('in success')
    facde.adminAuth(req).then((result) => {
        resHeandler.successHandler(res,result)
    }).catch((error) => {
        console.log(';in catch')
        resHeandler.errorHandler(res,error)
    })
})

module.exports = router