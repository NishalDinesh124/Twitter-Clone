const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  imgid : {type:String, required: false},
  followers : {type: Number, required :false},
  following : {type: Number, required :false},
  twittername :{ type : String , required: true},
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
}, {
  timestamps: true,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;