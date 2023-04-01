const express = require("express");
var app = express()
var router = require('express').Router()

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const User = require('../models/users.model');
const cors = require("cors")
const userHelpers = require('../helpers/user.helpers');
const { response, application } = require('express');
const multer = require('multer');
const Tweet = require('../models/tweets.model');
//const ImageModel= require('../models/image.model')
const fs = require("fs")
const jwt = require("jsonwebtoken");
const formidable = require('formidable');
const { log } = require('console');

app.use(cors());
app.use("/static", express.static("../uploads"));

  let userLoggedIn = null;
  
//   var storage = multer.diskStorage({
//     destination: "d:/backup/projects/Twitter Clone/twitter-clone/src/components/public/images",
//     filename: function (req, file,cb) {
//         console.log(file);
        
//     cb(null, tweetId + '.' + 'jpg' )
//     }
//     })
// var upload = multer({ storage: storage }).any('file');

//// Login status checking////
//////////////////////////////
 
const verifyLogin = (req, res, next) => {
    if (userLoggedIn) {
      next()
    } else {
      res.send(null)
    }
  }


//// ROUTES//////
/////////////////

router.get('/',verifyLogin,async(req,res,next)=>{
    let tweets = await userHelpers.getTweets()
    if (tweets) {
        res.json(tweets)
    } else if (err) {
        console.log(err);
    }
});
router.route('/signup').post((req, res) => {
    userHelpers.addUsers(req.body)
        .then((response) => {
            if (response.userExist) {
                res.json(true)
            } else {
                res.json(false)
            }
        })
        .catch(err => res.status(400).json("Error :" + err))
        // upload(req, res, function (err) {
        //     if (err instanceof multer.MulterError) {
        //         return res.status(500).json(err)
        //     } else if (err) {
        //         return res.status(500).json(err)
        //     }
        // return res.status(200).send(req.file)
        
        // })

});

router.post('/login',(req,res)=>{
    userHelpers.doLogin(req.body)
        .then(async(response) => {
            if (response.loginStatus) {
              req.session.user = response.user
                userLoggedIn= response.user
                console.log(req.session.user);
                const jwtToken =jwt.sign(
                    {id: req.session.user._id, email:req.session.user.email}, 'shhhhh');

                res.send({token : jwtToken})
                   
                } else {
                res.send(false)
            }

        })
        .catch(err => res.status(400).json("Error :" + err))
})
router.route('/tweet').post((req,res)=>{
    let user= userLoggedIn
    console.log(req.body.tweet);
    const newTweet = new Tweet ({
        twittername : user.twittername,
        userName: user.username,
        userId: user._id,
        tweet : req.body.tweet,
    }) 
    newTweet.save()
    .then(()=>{
        res.send('succesfully uploaded data')
    })
    .catch(err=> res.status(400).json("Error :" + err))
});


//  router.post('/imgtweet',async(req,res)=>{
   

//     const form =await formidable({ multiples: true });
//     form.parse(req, async(err, fields, files) => {
//          date= Date.now()
//         console.log(fields);
    //     let username = userLoggedIn.username
    //     let twittername= userLoggedIn.twittername
    //     let tweet = fields.tweet
    //     let userId= userLoggedIn._id
    //     let imgId = date
    // const newTweet =await new Tweet ({
    //     twittername : twittername,
    //     userName : username,
    //     userId: userId,
    //     tweet : tweet,
    //     imageId : imgId
    // }) 
   
    // newTweet.save()
    // .then(async(res)=>{
    //     console.log(res._id);
    //     //console.log("Tweets working!!!!!!!!!!!!!");
    
    // })
    // .catch(err=> console.log(err))
    // });
    
    //     upload(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(500).json(err)
    //         } else if (err) {
    //             return res.status(500).json(err)
    //         }
    //     return res.status(200).send(req.file)
        
    //     })
    
 

    // });



router.route('/profile',verifyLogin).get((req, res) => {
    console.log("Api call");
    userHelpers.getUserDetails(userLoggedIn._id)
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(400).json("Error :" + err))
});
router.post('/updateProfilePic',async(req,res)=>{
    console.log("Call from api");
    
       //     let tweet = fields.tweet
    //     let userId= userLoggedIn._id
    //     let imgId = date
    // const newTweet =await new Tweet ({
    //     userId: userId,
    //     tweet : tweet,
    //     imageId : imgId
    // }) 
   
    // newTweet.save()
    // .then(async(res)=>{
    //     console.log(res._id);
    //     console.log("Tweets working!!!!!!!!!!!!!");
    
    // })
    // .catch(err=> console.log(err))
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
    return res.status(200).send(req.file)
    
    })
})
router.post('/users',async(req,res)=>{
    console.log("CAaaaal");
    let users =await userHelpers.getUsers()
    console.log(users);
    res.send(users)

})
router.route('/logout').get((req, res) => {
    
    
    res.json("Logged out")
});
/////////////////////////////////
/////// MULTER STORAGE //////////
/////////////////////////////////
var storage = multer.diskStorage({
    destination: "d:/backup/projects/Twitter Clone/twitter-clone/src/components/public/images",
    filename: function (req, file,cb) {
        console.log(file);
        let date = Date.now()
        
    cb(null, userLoggedIn._id  + '.' + 'jpg' )
    }
    })
var upload = multer({ storage: storage }).any('file');


  



// router.route('/profile')

module.exports = router;