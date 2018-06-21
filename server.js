var express= require('express');
var bodyParser=require('body-parser');
const authRoutes=require('./routes/auth-routes');
const resourceRoutes=require('./routes/resorce-routes')
var _ = require('lodash');
var app=express();
const keys=require('./config/keys');
const passport=require('passport');
const passportSetup=require('./config/passport-setup')
var mongoose=require('./db/mongoose');
const cookieSession=require('cookie-session')
var Resource=require('./models/resources');
var User=require('./models/user');
// var {authenticate}=require('./server/middleware/authenticate')
const port=process.env.PORT||3000;
app.set('view engine','ejs')

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[keys.session.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/auth',authRoutes)
app.use('/resources',resourceRoutes)



app.get('/login',(req,res)=>{
  res.render('login.ejs')
})





app.listen(port,()=>{
    console.log(`Starting app at ${port}`)
  })
  