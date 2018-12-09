const userQuery = require('../queries/user.queries');

const getUsers = () => {
 let users = userQuery.getUsers();

  return users.then(result => {
    return result.length < 1 ?
      {error: 'error message', status:404} :
      result
  })
}

const getUser = (id) => {
 let user = userQuery.getUser(id);

  return user.then(result => {
    return result === null ?
      {error: 'user does not exsist', status:404} :
      result
  })
}

const createUser = (userInfo, hashPassword) => {
  let user = userQuery.createUser(userInfo, hashPassword)

  return user.then(result => {
      return !result
      ? { error: 'error creating user', status: 404 }
      : result
  })
}

const deleteUser = (id) => {
  let user = userQuery.deleteUser(id);
  
  return user.then(result => {
    return result
  })
}

const updateUser = (userInfo, id) => {
  let user = userQuery.updateUser(userInfo, id)

  return user.then(result => {
      return !result
      ? { error: 'error updating user', status: 404 }
      : result
  })
}

const validateUser = async (payload) => {
  let userData = await userQuery.validateUser(payload);
  
  return userData;
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  validateUser
}