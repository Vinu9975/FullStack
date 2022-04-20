const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//use this file For Connecting to MongoDB
const {mongoose} =require('./db.js');

//create object of controller file to use for routing
var MemberController=require('./controller/MemberController.js');

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

//to get Request fron Angular project / And send responce
//all to connect angular project to backend
app.use(cors({origin:'http://localhost:4200'}));

//use for routing 
app.use('/Members',MemberController);

app.listen(3000,()=>{console.log('Port Connect')});


