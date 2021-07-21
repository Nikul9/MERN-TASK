const userData = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/middleware')

const addUser = async (req) => {
    const Token = await req.cookies.jwtToken 
    if(Token) {
        return 1
    }   
    let query = {
            email : req.body.email
       }  
       const user = await userData.findOne(query)
       if(user) {
          
            return 1;
       } else {
            const saveUser = new userData(req.body)

            return saveUser.save().then((result) => {                
                return result
            })
        }
}

const loginUser = async (req) => {
    const Token = await req.cookies.jwtToken 
    if(!Token === undefined) {
        console.log('asdasd');
        return 1
    }
    const email    = req.body.email;
    const password = req.body.password
    
    const User = await userData.findOne({email}); 
    console.log(User)
    if(!User) {
        return 1;
    } else {
        console.log('in else')
        const comparePass = await bcrypt.compare(password,User.password)
        console.log(email + comparePass )
        if(comparePass) {
            console.log('abin successd')

            const token = await User.getToken();
            console.log(token)
           // res.cookie('jwtToken',token )
            return { User , token }
        } if(!comparePass) {
            console.log('abcd')
            return 1
        }
    }
}

const editUser = async (req) => {
    const update = Object.keys(req.body)
    const allowUpdate = ['firstName', "lastName", 'email', 'password','country','city', 'mobile'];
    const validUpdate = update.every((update) => allowUpdate.includes(update))

    if(!validUpdate) {
        return 1;
    }
    try {
        update.forEach((updates) => req.user[updates] = req.body[updates])
        const User = await req.user.save()
        return User
    } catch (e) {
        console.log(e);
    }
}

const adminLogin = async (req) => {
    const Token = await req.cookies.jwtToken 
    if(!Token === undefined) {
        console.log('asdasd');
        return 1
    }
    const adminUser = await userData.findOne({role : "Admin"})
    if(!adminUser) {
        const createAdmin = {
            firstName : "Admin",
            lastName : "User",
            email : "Admin@gmail.com",
            password : "321",
            phone : "9328217188",
            country : "india",
            city : "Ahmedabad",
            role : "Admin",
        }
        const Admin = new userData(createAdmin)
        await Admin.save() 
    }
    const email    = req.body.email;
    const password = req.body.password
    const User = await userData.findOne({email}); 
    // console.log('in if' + User)
    if(User.role !== 'Admin' || !User) {
        console.log('in if')
        return 1;
    } else {
        const comparePass = await bcrypt.compare(password,User.password)
        if(comparePass) {
            const token = await User.getToken();
            // res.cookie('jwtToken',token )
            return { User , token }
        } else {
            return 1;
        }
    }
}

const adminEdit = async (req) => {
    try {
        if(req.user.role === "Admin") {
            const update = Object.keys(req.body)
            const allowUpdate = ['firstName', "lastName", 'email', 'password','country','city', 'phone'];
            const validUpdate = update.every((update) => allowUpdate.includes(update))
    
            if(!validUpdate) {
                return 1;
            }
            const findUser = await userData.findOne({_id : req.params._id})
            if(findUser) {
                    
                        update.forEach((updates) => findUser[updates] = req.body[updates])
                        const User = await findUser.save()
                        return User        
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    } catch(e) {
        console.log(e)
    }
}

const adminCreateUser = async (req) => {
    if(req.user.role == "Admin") {

        const email =  req.body.email
        const ExistUser = await userData.findOne({email})
        if(ExistUser) {
            return 1;
        }
        const User = new userData(req.body)
        await User.save() 
        return User;          
    } else {
        return 1;
    }
}

const adminDelete = async (req) => { 
    if(req.user.role == "Admin") {
        const _id = req.params._id
        const User = await userData.findOne({_id})
        if(User) {
            await User.remove()
            return User
        } else {
            return 1;
        }
    } else {
        return 1;
    }
}

const AllUser  = async (req) => {
    if(req.user.role == "Admin") {
        const ussers = await userData.find({})
        return ussers
    } else {
        return 1;
    }
}

const findOneUser = async(req) => {
    const oneUser = req.params._id
    console.log(oneUser);
    const findUserData = await userData.find({_id : oneUser})
    if(findUserData) {
        console.log(findUserData);
        return findUserData
    } else {
        log('in else block')
        return 1
    }
}

const logOut = async (req) => {
    if(req.user.tokens) {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })  
        const user = await req.user.save()        
        return user;
    } else {
        return 1;
    }
}

const cheakeAuth = async (req) =>  {
    const data = req.user._id
    if(data) {
       console.log(data);
        return req.user
    } else {
        return 1
    }
}

const adminAuth = async (req) => {
    if(req.user.role === "Admin") {
        return  req.user.role
    } else {
        return 1
    }
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