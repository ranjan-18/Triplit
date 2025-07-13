const mongoose = require('mongoose');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,  
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match: [/\S+@\S+\.\S+/, "Email is invalid"],
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false // Exclude from queries by default
    },
    isVerified: {
      type: Boolean,
      default: false, // for future: email verification
    },
    avatar: {
      type: String,
      default: "", // for profile picture
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
},{timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;