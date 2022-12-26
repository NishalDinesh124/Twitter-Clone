const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweetsSchema = new Schema({
  userId: String,
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