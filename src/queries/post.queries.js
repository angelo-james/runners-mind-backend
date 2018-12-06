const Posts = require('../schemas/post.schemas');
const Users = require('../schemas/user.schemas');

const createPost = (postInfo) => {
  let { title, post, userId } = postInfo;
  const newPost = new Posts({
    title: title,
    post: post,
    user_id: userId
  })

  return newPost.save()
  .then(post => {
    Users.findById({_id: post.user_id})
      .then(user => {
        user.post.push(post._id)
        user.save()
      })
    return post
  })
}

const deletePost = (postId) => {
  return Posts.findById({ _id: postId })
  .then(post => {
    return !post ? {status: 404, error: 'post not found'} : 
      post.remove()
        .then(post => {
          Users.findById({_id: post.user_id})
            .then(user => {
              user.post.pull(post._id)
              user.save()
            })
          return post
        })
    })
}

module.exports = {
  createPost,
  deletePost
}