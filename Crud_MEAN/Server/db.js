const mongoose = require("mongoose");

const URL="mongodb://localhost:27017/CrudDBAngulr";

mongoose.connect(URL,(err,db)=>{
    if(err) throw err;
    console.log("data base connected");
});

module.exports=mongoose;