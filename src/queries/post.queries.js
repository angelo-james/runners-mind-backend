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
        console.log(user)
        user.post.push(post._id)
        user.save()
      })
    return post
  })
}

module.exports = {
  createPost
}