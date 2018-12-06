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

const deleteUser = (id) => {
  return Users.findById({ _id: id })
  .then(user => {
    return !user ? {status: 404, error: 'user not found'} : user.remove() 
    })
}

const updateUser = (userInfo, id) => {
  let { username, password, email } = userInfo;
  
  return Users.findByIdAndUpdate({_id: id}, userInfo)
    .then(() => {
      return Users.findOne({_id: id})
        .then(user => {
          return user;
        })
    })
}

const validateUser = (payload) => {
  let { email, password } = payload;
  
  return Users.find({email: email})
    .then(user => {
      if (user[0].password == password) {
        return user
      } else {
        return {error: 'username or password is invalid'}
      }
    })

}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  validateUser
}