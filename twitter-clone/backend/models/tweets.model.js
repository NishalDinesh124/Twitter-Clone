const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweetsSchema = new Schema({
  tweet: { type: String, required: false },
  post: {
    data: Buffer,
    contentType : String
  }
 
}, {
  timestamps: true,
});

const Tweet = mongoose.model('Tweets', tweetsSchema);

module.exports = Tweet;