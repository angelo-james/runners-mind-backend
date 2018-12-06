const Comments = require('../schemas/comment.schemas');
const Posts = require('../schemas/post.schemas');

const createComment = (commentInfo) => {
  let { comment, username, postId } = commentInfo;
  const newComment = new Comments({
    comment: comment,
    username: username,
    post_id: postId
  })

  return newComment.save()
  .then(comment => {
    Posts.findById({_id: comment.post_id})
      .then(post => {
        post.comment.push(comment._id)
        post.save()
      })
    return comment
  })
}

const deleteComment = (commentId) => {
  return Comments.findById({ _id: commentId })
  .then(comment => {
    return !comment ? {status: 404, error: 'comment not found'} : 
      comment.remove()
        .then(comment => {
          Posts.findById({_id: comment.post_id})
            .then(post => {
              post.comment.pull(comment._id)
              post.save()
            })
          return comment
        })
    })
}

module.exports = {
  createComment,
  deleteComment
}