import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import Routes from './server/route.js'

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/users',Routes);

const URL='mongodb://localhost:27017/Vis11';
const PORT='8080';

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>{
    app.listen(PORT,()=>console.log("All are done"))
}).catch((error)=>{
    console.log('Error',error.message)
})