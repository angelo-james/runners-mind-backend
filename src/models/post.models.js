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

const updatePost = (postInfo, id) => {
  let post = postQuery.updatePost(postInfo, id)

  return post.then(result => {
      return !result
      ? { error: 'error updating post', status: 404 }
      : result
  })
}

const getPosts = (userId) => {
  let posts = postQuery.getPosts(userId);

  return posts.then(result => {
    return result.length < 1 ?
      {error: 'error message', status:404} :
      result
  })
}

module.exports = {
  createPost,
  deletePost,
  updatePost,
  getPosts
}