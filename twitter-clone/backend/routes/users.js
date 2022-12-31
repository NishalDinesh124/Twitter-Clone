
const router = require('express').Router();
const express = require("express");
const app = express()

const User = require('../models/users.model');
const cors = require("cors")
const userHelpers = require('../helpers/user.helpers');
const { response, application } = require('express');
const multer = require('multer');
const Tweet = require('../models/tweets.model');
//const ImageModel= require('../models/image.model')
const fs = require("fs")
const jwt = require("jsonwebtoken");
const { log } = require('console');

app.use(cors());
app.use("/static", express.static("../uploads"));

var userLoggedIn = null
var tweet = null
// const storage = multer.diskStorage({
//     destination:(req,res,cb)=>{
//         cb(null,'../uploads')
//     },
//     filename :(req,file,cb)=>{
//         let userId= ""+ userLoggedIn._id
//         console.log(req.body.fieldname);
//         cb(null,userId + "." + "jpg")
//     }
// })

// const upload = multer({storage:storage})


router.route('/').get(async (req, res) => {
    let tweets = await userHelpers.getTweets()
    if (tweets) {
        res.json(tweets)
    } else if (err) {
        console.log(err);
    }
    
    // .catch(err => res.status(400).json("Error :" + err))
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

});

router.route('/login').post(async(req, res) => {
    console.log(req.body.email);
    userHelpers.doLogin(req.body)
        .then((response) => {

            if (response.loginStatus) {
                //console.log(response.user);
                userLoggedIn = response.user
               console.log(userLoggedIn);
                const jwtToken =jwt.sign(
                    {id: userLoggedIn._id, email:userLoggedIn.email}, 'shhhhh');
                    console.log(jwtToken);
                    res.json({message: "Welcome back!",token: jwtToken})
            } else {
                res.json(false)
            }

        })
        .catch(err => res.status(400).json("Error :" + err))
});

// router.post('/imgtweet', upload.single("testImage"),(req,res)=>{
//     let user=userLoggedIn
//         const saveImage = Tweet({
//             userId : user._id,
//             tweet : req.body.tweet,
//         name : req.body.tweet,
//         img:{
//             data: fs.readFileSync('../uploads/' + user._id + "." + "jpg"),
//             contentType : "image/png"
//         },
//     });
//     saveImage.save()
//     .then((res)=>{
//         console.log("Image is saved");
//     })
//     .catch((err)=>{
//         console.log(err,"An error occured");
//     });
//     res.send("Image is saved")
// });
router.route('/tweet').post((req,res)=>{
    let user= userLoggedIn
    console.log(req.body.tweet);
    const newTweet = new Tweet ({
        userId: user._id,
        tweet : req.body.tweet,
    }) 
    newTweet.save()
    .then(()=>{
        res.send('succesfully uploaded data')
    })
    .catch(err=> res.status(400).json("Error :" + err))
});

var storage = multer.diskStorage({
    destination: "./public/images",
    filename: function (req, file ,cb) {
    tweet = file.originalname
        console.log(file.originalname);
    cb(null, Date.now() + '.' + 'jpg' )
    }
    })
var upload = multer({ storage: storage }).array('file');

router.route('/imgtweet').post(async(req,res)=>{
  
    
upload(req, res,async function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
return res.status(200).send(req.file)

})


})


router.route('/profile').get((req, res) => {
    userHelpers.getUserDetails(req.session.user._id)
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(400).json("Error :" + err))
});

router.route('/logout').get((req, res) => {
    
    
    res.json("Logged out")
});




// router.route('/profile')


module.exports = router;