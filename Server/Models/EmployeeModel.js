const { timeStamp } = require('console');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const EmployeeSchema = new Schema({

    Name:{
     type:String,
     unique:true,
     required:[true,'name is required']
    },   
    companyName:{
        type:String,
    },
   Img:{
        type:String,
    },
    salary:{
        type:Number,
    },

},{timeStamp:true})
module.exports =mongoose.model("Employee",EmployeeSchema);