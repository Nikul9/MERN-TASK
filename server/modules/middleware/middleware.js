const db = require('../../models/user')
const resHndlr = require('../../handlers/responseHandler')
const jwt = require('jsonwebtoken')

const Authenticate = async (req,res,next) => {
    try {
        const Token = await req.cookies.jwtToken 
        console.log('token = ' + Token );
        const vatifyToken = jwt.verify(Token,process.env.SECRET_TOKEN)
        const user = await db.findOne({_id : vatifyToken._id,"tokens.token" : Token})
        console.log(user.firstName);
        if(!user) {
           throw new Error("User not found") 
        }
        req.user = user
        req.token = Token
        next()
    } catch (error) {
        resHndlr.validationErrorHandler(res, error);
    }
}
module.exports = Authenticate