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

module.exports = {
  createComment
}