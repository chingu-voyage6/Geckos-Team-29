const router=require('express').Router();
const passport=require('passport')

router.get('/',(req,res)=>{
    res.render('login');
})


//auth logout
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/')
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