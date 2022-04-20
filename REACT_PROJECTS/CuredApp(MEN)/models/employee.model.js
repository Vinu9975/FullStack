"use strict";
exports.__esModule = true;
const mongoose = require('mongoose');
const { constant } = require('../constant/constant');


var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: 'This field is required.'
    },
    city: {
        type: String,
        required: 'This field is required.'
    },
    age: {
        type: Number,
        required: 'This field is required.'
    },
    sallary: {
        type: String,
        required: 'This field is required.'
    }
});

// Custom validation 

employeeSchema.path('fullName').validate((val)=>{
    
    return constant.fullNameRegex.test(val);
},'Invalid name');

employeeSchema.path('email').validate((val) => {
    return constant.emailRegex.test(val);
}, 'Invalid e-mail.');

employeeSchema.path('mobile').validate((val)=>{
    
    return constant.mobileRegex.test(val);
},'Invalid Mobile Number');

employeeSchema.path('city').validate((val)=>{
    
    return constant.cityRegex.test(val);
},'Invalid City');

employeeSchema.path('age').validate((val)=>{
    
    return constant.ageRegex.test(val);
},'Invalid Age');

employeeSchema.path('sallary').validate((val)=>{
    
    return constant.sallaryRegex.test(val);
},'Invalid Sallary');


mongoose.model('Employee', employeeSchema);