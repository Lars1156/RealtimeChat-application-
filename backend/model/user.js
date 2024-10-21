const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    useName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    token:{
        type: String
    }
});

const User  =  mongoose.model('User ', userSchema);
module.exports = User 