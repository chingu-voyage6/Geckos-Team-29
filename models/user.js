const mongoose=require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  local:{
    username:String,
    password:String
  },
  
  google:{
    username:String,
    googleId: {
      type: String,
    }
  }});

  userSchema.plugin(passportLocalMongoose);

  const User=mongoose.model('user',userSchema)

  module.exports=User