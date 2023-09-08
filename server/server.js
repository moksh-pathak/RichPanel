const express = require('express');
const router = require('./routes/testRoutes');
const dotenv = require('dotenv')

const  cors  = require('cors');
const connectDB = require('./config/db');



connectDB();

const app = express()

app.use(cors());



app.use('/',router)
app.use('/api/v1/auth', require('../server/routes/authRoutes'))



const Port = process.env.PORT;
app.listen(Port,()=>{
    console.log(`server is running on ${Port} successfully`)
})  