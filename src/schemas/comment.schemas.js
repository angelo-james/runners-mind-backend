const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  date: { type: Date, default: Date.now },
  user_id: [],
  post_id: [],
  comment: {
    type: String,
    required: true
  }
})

module.exports = Comments = mongoose.model('comments', CommentsSchema);