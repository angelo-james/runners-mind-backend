const model = require('../models/comment.models');

const createComment = (req, res, next) => {
  let { body } = req;
  
  let promise = model.createComment(body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json({result, message: 'created a comment'})
  })
  promise.catch(error => {
    next(error)
  })
}

const deleteComment = (req, res, next) => {
  let { body } = req;

  let promise = model.deleteComment(body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

const updateComment = (req, res, next) => {
  let { body } = req;
  let { id } = req.params;
  let promise = model.updateComment(body, id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json({result, message: 'updated a comment'})
  })
  promise.catch(error => {
    next(error)
  })
}

const getComments = (req, res, next) => {
  let { body } = req;
  
  let promise = model.getComments(body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  createComment,
  deleteComment,
  updateComment,
  getComments
}