const express= require('express');
const bodyParser=require('body-parser');
const authRoutes=require('./routes/auth-routes');
const resourceRoutes=require('./routes/resorce-routes')
const app=express();
const keys=require('./config/keys');
const passport=require('passport');
const passportSetup=require('./config/passport-setup');
const mongoose=require('./db/mongoose');
const cookieSession=require('cookie-session')
const Resource=require('./models/resources');
const User=require('./models/user');

// var {authenticate}=require('./server/middleware/authenticate')

const port=process.env.PORT||3000;
app.set('view engine','ejs')

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[keys.session.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

//Serving up static files
app.use(express.static(__dirname+ "/public"));

//Routes
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/auth',authRoutes)
app.use('/resources',resourceRoutes)




app.get('/',(req,res)=>{
  res.redirect('/resources')
})



app.listen(port,()=>{
    console.log(`Starting app at ${port}`)
  })
  