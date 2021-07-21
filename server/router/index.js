const userRouter = require('../modules/userModules/userRoute')

module.exports = (app) => {
    // employee route
    app.use('/api/user', [userRouter]);
}