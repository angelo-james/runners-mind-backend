const userQuery = require('../queries/user.queries');

const getUsers = () => {
  users = userQuery.getUsers();

  return users.then(result => {
    
    return result.length < 1 ?
      {error: 'error message', status:404} :
      result
  })
}

const getUser = (id) => {
  user = userQuery.getUser(id);

  return user.then(result => {
    
    return result.length < 1 ?
      {error: 'error message', status:404} :
      result
  })
}

module.exports = {
  getUsers,
  getUser
}