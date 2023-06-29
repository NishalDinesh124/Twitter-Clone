let User = require('../models/users.model');
let Tweets = require('../models/tweets.model');
const { response } = require('express');
var bcrypt = require('bcrypt');
const { log } = require('console');
const Users = require('../models/users.model');

module.exports = {
    getTweets: () => {
        return new Promise((resolve, reject) => {
            Tweets.find()
                .then((tweets) => {
                    resolve(tweets)
                })
                .catch(err => resolve(err))
        })
    },
    addUsers: (userDetails) => {
        try {
            return new Promise(async (resolve, reject) => {
                let user = await User.findOne({ "twittername": userDetails.twittername })
                if (user) {
                    resolve({ userExist: true })
                } else {


                    userDetails.password = await bcrypt.hash(userDetails.password, 10)
                    const newUser = new User(userDetails)

                    newUser.save()
                        .then(response)
                    resolve(userExist = false)
                }
            })
        } catch (err) {
            console.log(err);
        }
    },

    doLogin: (userDetails) => {

        try {
            return new Promise(async (resolve, reject) => {

                let user = await User.findOne({ "twittername": userDetails.username })
                if (user) {
                    bcrypt.compare(userDetails.password, user.password).then((status) => {
                        if (status) {
                            console.log("Login successfully completed");
                            resolve({ loginStatus: true, user })
                        } else {
                            console.log("Password mismatch");
                            resolve({ loginStatus: false })
                        }
                    })
                } else {
                    console.log("Invalid username");
                    resolve({ loginStatus: false })
                }

            })
        } catch (err) {
            console.log(err);
        }
    },
    postTweets: (tweet) => {
        try {
            return new Promise((resolve, reject) => {
                const newTweet = new Tweets(tweet)

                newTweet.save()
                    .then(response)
                resolve(response)
            })
        } catch (err) {
            console.log(err);
        }
    },
    getUserDetails: (userId) => {
        try {
            return new Promise((resolve, reject) => {
                let user = User.findById(userId)
                resolve(user)
            })
        } catch (err) {
            console.log(err);
        }
    },
    getUsers: () => {
        try {
            return new Promise((resolve, reject) => {
                User.find()
                    .then((users) => {
                        resolve(users)
                    })
                    .catch(err => resolve(err))
            })
        } catch (err) {
            console.log(err);
        }
    },
    addFollow: (username) => {
        try {
            return new Promise(async(resolve, reject) => {
               let user =await User.findOne({"twittername" : username})
               if(user){
                let followers =await user.followers
                User.updateOne({twittername : username},{
                    followers : followers +1
                }).then((res)=>{
                    resolve(res);
                })
               }
               
               
            })
        } catch (err) {
            console.log(err);
        }

    }
}