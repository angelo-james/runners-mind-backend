const postQuery = require('../queries/post.queries');

const createPost = (postInfo) => {
  post = postQuery.createPost(postInfo)

  return post.then(result => {
      return !result
      ? { error: 'error creating a post', status: 404 }
      : result
  })
}

const deletePost = (postId) => {
  let post = postQuery.deletePost(postId);
  
  return post.then(result => {
    return result
  })
}

module.exports = {
  createPost,
  deletePost
}