import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './route/studentRoute.js';

const app = express();//created a server
dotenv.config();
app.use(bodyParser.json());//to parse json data
const port = process.env.PORT || 3008;
const mongoURL = process.env.mongoURL ;

app.use('/student', router);//using the student route
mongoose
.connect(mongoURL)
.then( ()=>{
    console.log("connected to mongoDB");
    
    app.listen(port, ()=>{
        console.log("server started");
    })
}).catch(()=>{
    console.log("error connecting to mongoDB");
})