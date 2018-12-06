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

const updateComment = (commentInfo, commentId) => {
  let comment = commentQuery.updateComment(commentInfo, commentId)

  return comment.then(result => {
      return !result
      ? { error: 'error updating comment', status: 404 }
      : result
  })
}

module.exports = {
  createComment,
  deleteComment,
  updateComment
}