var express= require('express');
var bodyParser=require('body-parser');
var _ = require('lodash');
var app=express();
var mongoose=require('./server/db/mongoose')
var {Todo}=require('./server/models/todo');
var {User}=require('./server/models/user');
var {authenticate}=require('./server/middleware/authenticate')
const port=process.env.PORT||3000;
app.use(bodyParser.json())










app.listen(port,()=>{
    console.log(`Starting app at ${port}`)
  })
  