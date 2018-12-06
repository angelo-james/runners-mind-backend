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
  let { id } = req.params;

  let promise = model.deleteComment(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  createComment,
  deleteComment
}