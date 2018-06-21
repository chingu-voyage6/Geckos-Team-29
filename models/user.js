const mongoose=require('mongoose');

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
  const User=mongoose.model('user',userSchema)
  module.exports=User