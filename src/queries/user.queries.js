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

module.exports = {
  getUsers,
  getUser
}