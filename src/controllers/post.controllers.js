const model = require('../models/post.models');

const createPost = (req, res, next) => {
  let { body } = req;
  
  let promise = model.createPost(body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json({result, message: 'created a post'})
  })
  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  createPost
}