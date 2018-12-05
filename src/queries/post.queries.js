const Posts = require('../schemas/post.schemas');

const createPost = (postInfo) => {
  let { title, post, userId } = postInfo;
  const newPost = new Posts({
    title: title,
    post: post,
    user_id: userId
  })
  return newPost.save()
    .then(posts => {
      return posts
    })
}

module.exports = {
  createPost
}