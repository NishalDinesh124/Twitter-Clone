const router = require('express').Router();
let User = require('../models/users.model');
const userHelpers = require('../helpers/user.helpers');
const { response } = require('express');

const multer= require ('multer');
const Tweet = require('../models/tweets.model');
//storage
const Storage = multer.diskStorage({
    destination: 'posts',
    filename:(req,file,cb)=>{
        cb(null, Date.now()+file.originalname);
    }
});
const upload = multer({
    storage: Storage
}).any('postImage')


//routes

router.route('/').get(async(req, res)=>{
    let user = req.session.user
    let tweets = await userHelpers.getTweets()
    if(tweets){
        res.json(tweets)
    }else if (err){
       console.log(err);
    }
    
    
    // .catch(err => res.status(400).json("Error :" + err))
});

router.route('/signup').post((req, res)=>{
    console.log(req.body)
     userHelpers.addUsers(req.body)
     .then(()=>{
        res.json("User added")
     })
     .catch(err => res.status(400).json("Error :" + err))
   
});

router.route('/login').post((req,res)=>{
    userHelpers.doLogin(req.body)
    .then((response)=>{
       
        if(response.loginStatus){
            req.session.user = response.user
            res.json("Login successfull")
        }else{
            res.json("Login failed")
        }
        
    })
    .catch(err => res.status(400).json("Error :" + err))
});

router.route('/tweet').post((req,res)=>{
    console.log(req.body.tweet);
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }else{
            const newTweet = new Tweet ({
                tweet : req.body.tweet,
                post: {
                    data: req.body.file,
                    contentType: 'image/jpg'
                }
            }) 
            newTweet.save()
            .then(()=>{
                res.send('succesfully uploaded data')
            })
            .catch(err=> res.status(400).json("Error :" + err))
        }
    })
});

router.route('/profile').get((req,res)=>{
    userHelpers.getUserDetails(req.session.user._id)
    .then((response)=>{
        res.json(response)
    })
    .catch(err => res.status(400).json("Error :" + err))
});

router.route('/logout').get((req,res)=>{
    req.session.user = null
    console.log(req.session.user);
    res.json("Logged out")
});




// router.route('/profile')


module.exports = router;