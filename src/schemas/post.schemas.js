const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  post: {
    type: String,
    required: true
  },
  likes: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  date_created: { type: Date, default: Date.now },
  user_id: {
    type: String,
    required: true
  },
  comment: []
});

module.exports = Posts = mongoose.model('posts', PostsSchema);