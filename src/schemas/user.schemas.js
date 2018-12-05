const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: [],
  following: [],
  token: '',
  date: { type: Date, default: Date.now },
  post: []
});

module.exports = Users = mongoose.model('users', UsersSchema);