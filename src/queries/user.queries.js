const Users = require('../schemas/user.schemas');

const getUsers = () => {
  return Users.find()
  .then(users => {
    return users
  }) 
}

const getUser = (id) => {
  return Users.findById({ _id: id })
    .then(user => {
      return user
    })
}

const createUser = (userInfo) => {
  let { username, password, email } = userInfo;
  const newUser = new Users({
    username: username,
    password: password,
    email: email
  })
  return newUser.save()
    .then(users => {
      return users
    })
}

module.exports = {
  getUsers,
  getUser,
  createUser
}