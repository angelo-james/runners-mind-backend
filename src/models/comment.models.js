const commentQuery = require('../queries/comment.queries');

const createComment = (commentInfo) => {
  let comment = commentQuery.createComment(commentInfo)

  return comment.then(result => {
      return !result
      ? { error: 'error creating a comment', status: 404 }
      : result
  })
}

const deleteComment = (username) => {
  let comment = commentQuery.deleteComment(username);
  
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

const getComments = (postId) => {
  let comments = commentQuery.getComments(postId);

  return comments.then(result => {
    return result.length < 1 ?
      {error: 'error message', status:404} :
      result
  })
}

module.exports = {
  createComment,
  deleteComment,
  updateComment,
  getComments
}