const { timeStamp } = require('console');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema = new Schema({

    FirstName:{
     type:String,
     required:[true,'first name is required']
    },   
    LastName:{
     type:String,
     required:[true,'last name is required']
    },   
    Password:{
        type:String,
        required:[true,'password is required']
    },
   Email:{
        type:String,
        unique:true,
        required:[true,'email is required']
    },
    IsAdmin:{
     type:Boolean,
     default:false
    },
    LastLogin:{
        type:Date,
        default:Date.now
    },
    Image:{
        type:String,
    },
    IsLoggedIn:{
        type:Boolean,
        default:false
    }

},{timeStamps:true})
module.exports =mongoose.model("User",UserSchema);