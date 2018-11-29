const express = require('express');
const router = express.Router();

const Posts = require('../models/post.models');

router.get('/', (req, res) => {
  Posts.find()
  .then(posts => res.status(200).json({ data: posts }))
});

router.post('/', (req, res) => {
  let { post, likes, title } = req.body;
  const newPost = new Posts({
    post,
    likes,
    title
  })
  newPost.save().then(post => res.status(200).json({ data: post, message: 'Successfully created a new post.' }))
    .catch(error => res.status(404).json({ data: error, message: 'Failed to create a post.' }))
});

module.exports = router;