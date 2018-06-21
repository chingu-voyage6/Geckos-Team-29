const mongoose=require('mongoose');

var resourceSchema = new mongoose.Schema({
    name:String,
    image:String,
    subdescription:String,
    description:String,
    created:{type:Date,default:Date.now},
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    },
  });
  const Resource=mongoose.model('resource',resourceSchema)
  module.exports=Resource