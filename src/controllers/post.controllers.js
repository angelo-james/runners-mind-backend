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

const deletePost = (req, res, next) => {
  let { id } = req.params;

  let promise = model.deletePost(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

const updatePost = (req, res, next) => {
  let { body } = req;
  let { id } = req.params;
  let promise = model.updatePost(body, id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json({result, message: 'updated a post'})
  })
  promise.catch(error => {
    next(error)
  })
}

const getPosts = (req, res, next) => {
  let { body } = req;
  
  let promise = model.getPosts(body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  createPost,
  deletePost,
  updatePost,
  getPosts
}