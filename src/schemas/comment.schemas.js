const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  date: { type: Date, default: Date.now },
  username: {
    type: String,
    required: true
  },
  post_id: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
})

module.exports = Comments = mongoose.model('comments', CommentsSchema);