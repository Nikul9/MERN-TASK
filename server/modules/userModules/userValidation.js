const joi = require('@hapi/joi')
const resHndlr = require('../../handlers/responseHandler')

const addUser  = async (req,res,next) => {
    try {
        const UserSchema = joi.object({
            firstName : joi.string().required(),
            lastName  : joi.string().required(),
            email     : joi.string().required(),
            password  : joi.string().required(),
            phone    : joi.string().required(),
            country    : joi.string().required(),
            city      : joi.string().required(),
            role      : joi.string().required()
        })
        await UserSchema.validateAsync(req.body)
        console.log('it is')
        next()  
    } catch(error) {
        resHndlr.validationErrorHandler(res, error);
    }
}

module.exports = {
    addUser
}