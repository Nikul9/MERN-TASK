require('dotenv').config()
const mongoose = require('mongoose');
const constant = require('../utils/constant')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true 
    },
    country : {
        type : String,
        require : true
    }, 
    city : {
        type : String,
        require : true
    },
    role : {
        type : String ,
        require : true
    },
    tokens : [{
        token : {
            type : String  
        }
    }]
});

UserSchema.pre('save',async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password , 8)
    } 
    next()
})

UserSchema.methods.getToken = async function() {
    try {
        const token = await jwt.sign({_id : this._id},process.env.SECRET_TOKEN)
        this.tokens = this.tokens.concat({token}) 
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}

const user = mongoose.model(constant.DB_MODEL_REF.USER,UserSchema)

module.exports = user