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

const updateComment = (commentInfo, commentId) => {
  let { comment } = commentInfo;
  
  return Comments.findByIdAndUpdate({_id: commentId}, commentInfo)
    .then(() => {
      return Comments.findOne({_id: commentId})
        .then(comment => {
          return comment;
        })
    })
}

const getComments = (postId) => {
  return Comments.find({post_id: postId.post_id})
  .then(comments => {
    return comments
  }) 
}

module.exports = {
  createComment,
  deleteComment,
  updateComment,
  getComments
}