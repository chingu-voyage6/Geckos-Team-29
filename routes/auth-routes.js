const router=require('express').Router();
const passport=require('passport');
const User=require('../models/user');

router.post("/signup", function(req, res){
    var newUser = new User({username: req.body.username});
            
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect('/resources')
        });
    });
    
});

// handling login logic
router.post("/login", passport.authenticate('local', 
    {
        successRedirect: "/resources",
        failureRedirect: "/login"
    }), function(req, res){
});

//auth logout
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/resources')
})
// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//Google callback route
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/resources')
})

module.exports=router;