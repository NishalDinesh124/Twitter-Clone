const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweetsSchema = new Schema({
  twittername : {type : String , required : true},
  userName: {type : String, required : true},
  userId: {type :String, required: true},
  imageId: {type :String ,required: false},
  tweet: { type: String, required: false },
  name : String,
    img : {
        data: Buffer,
        contentType : String
    },
}, {
  timestamps: true,
});

const Tweet = mongoose.model('Tweets', tweetsSchema);

module.exports = Tweet;