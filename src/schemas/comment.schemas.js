const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  date: { type: Date, default: Date.now },
  user_id: [],
  body: {
    type: String
  }
})

module.exports = Comments = mongoose.model('comments', CommentsSchema);