const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');
const keys=require('./keys');
const User=require('../models/user');

passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user=>{
        done(null,user)
    })).catch(err=>{
        console.log(err)
    })
})
passport.use(
    new GoogleStrategy({
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret

},(accessToken,refreshToken,profile,done)=>{
   console.log(profile)
    User.findOne({'google.googleId':profile.id}).then(user=>{
        if(!user){
            new User({
                'google.username':profile.displayName,
                'google.googleId':profile.id
            }).save().then(newUser=>{
                done(null,newUser)
            })
        }
        else{
            console.log(`user is ${user}` )
            done(null,user)
        }
    }
    )
 
}))