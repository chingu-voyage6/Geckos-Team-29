const router=require('express').Router();
const Resource=require('../models/resources');



const authCheck=(req,res,next)=>{
    if (req.isAuthenticated())
    return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

router.get('/',(req,res)=>{
    res.render('resources.ejs',{user:req.user})
    console.log(req.user);
  })
router.get('/new',authCheck,(req,res)=>{
    res.render('new',{user:req.user});
})

router.post('/new',authCheck,(req,res)=>{
    console.log(`${req.user.username} can post blogs because he is logged in`);
        // get data from form and add to blogs array
        var name = req.body.name;
        var image = req.body.image;
        var desc = req.body.description;
        var subdes=req.body.subdescription;
        var author = {
            id: req.user._id,
            username: req.user.username
        }
        var newResource = {name, image,subdescription:subdes, description: desc, author:author}


        resource=new Resource(newResource)
        resource.save().then(resource=>{
            console.log(resource)
        }).catch(err=>{
            console.log(err)
        })

})
module.exports=router;