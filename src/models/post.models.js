const postQuery = require('../queries/post.queries');

const createPost = (postInfo) => {
  user = postQuery.createPost(postInfo)

  return user.then(result => {
      return !result
      ? { error: 'error creating a post', status: 404 }
      : result
  })
}

module.exports = {
  createPost
}