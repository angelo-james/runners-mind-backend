const commentQuery = require('../queries/comment.queries');

const createComment = (commentInfo) => {
  let comment = commentQuery.createComment(commentInfo)

  return comment.then(result => {
      return !result
      ? { error: 'error creating a comment', status: 404 }
      : result
  })
}

const deleteComment = (commentId) => {
  let comment = commentQuery.deleteComment(commentId);
  
  return comment.then(result => {
    return result
  })
}

module.exports = {
  createComment,
  deleteComment
}