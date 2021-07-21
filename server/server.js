require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const userRout = require('./modules/userModules/userRoute')
const productRout = require('./modules/product/productRouter')

const dbConfig = require('./config/dbConnection');

app.use(express.json());
app.use(cookieParser())
app.use(cors());

app.listen(process.env.PORT, async () => {
// ${process.env.NODE_ENV}
    console.log(`1, Server running at port no. ${process.env.PORT} in  mode.`);
    dbConfig.connectDb(); // DB connect and authenticate
    app.use('/',userRout)
    app.use('/',productRout)
    // userRout.initialize(app);
    // require('./rapp.') (app); 
    // userRout.initialize(app);// API route 
});