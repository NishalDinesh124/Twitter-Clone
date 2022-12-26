const router = require('express').Router();
const express = require("express");
const app = express()
let User = require('../models/users.model');
const cors = require("cors")
const userHelpers = require('../helpers/user.helpers');
const { response, application } = require('express');
const multer = require('multer');
const Tweet = require('../models/tweets.model');
const ImageModel= require('../models/image.model')
const fs = require("fs")

app.use(cors());
app.use("/static", express.static("../uploads"));


 var userLoggedIn= null
const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'../uploads')
    },
    filename :(req,file,cb)=>{
        let userId= ""+ userLoggedIn._id
        console.log(req.body.fieldname);
        cb(null,userId + "." + "jpg")
    }
})

const upload = multer({storage:storage})


    


router.route('/').get(async (req, res) => {
   if(userLoggedIn){
    let tweets = await userHelpers.getTweets()
    if (tweets) {
        res.json(tweets)
    } else if (err) {
        console.log(err);
    }
   }else{
    res.send(null)
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

router.route('/login').post((req, res) => {
    userHelpers.doLogin(req.body)
        .then((response) => {

            if (response.loginStatus) {
                //console.log(response.user);
                userLoggedIn = response.user
                res.json(true)
            } else {
                res.json(false)
            }

        })
        .catch(err => res.status(400).json("Error :" + err))
});

router.post('/imgtweet', upload.single("testImage"),(req,res)=>{
    console.log(userLoggedIn);
        const saveImage = Tweet({
            userId : userLoggedIn._id,
            tweet : req.body.tweet,
        name : req.body.tweet,
        img:{
            data: fs.readFileSync('../uploads/' + userLoggedIn._id + "." + "jpg"),
            contentType : "image/png"
        },
    });
    saveImage.save()
    .then((res)=>{
        console.log("Image is saved");
    })
    .catch((err)=>{
        console.log(err,"An error occured");
    });
    res.send("Image is saved")
});
router.route('/tweet').post((req,res)=>{
    console.log(req.body.tweet);
    console.log("Working");
    const newTweet = new Tweet ({
        userId: userLoggedIn._id,
        tweet : req.body.tweet,
    }) 
    newTweet.save()
    .then(()=>{
        res.send('succesfully uploaded data')
    })
    .catch(err=> res.status(400).json("Error :" + err))
})


router.route('/profile').get((req, res) => {
    userHelpers.getUserDetails(req.session.user._id)
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(400).json("Error :" + err))
});

router.route('/logout').get((req, res) => {
    userLoggedIn = null
    console.log(userLoggedIn);
    res.json("Logged out")
});




// router.route('/profile')


module.exports = router;