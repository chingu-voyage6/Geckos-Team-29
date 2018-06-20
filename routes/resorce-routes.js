const router=require('express').Router();
const authCheck=(req,res,next)=>{
    if(!req.user){
        res.redirect('/login')
    }else{
        next()
    }
}
router.get('/',authCheck,(req,res)=>{
    res.render('resources',{user:req.user});
})
module.exports=router;