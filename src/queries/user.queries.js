const Users = require('../schemas/user.schemas');

const getUsers = () => {
  return Users.find()
  .then(users => {
    return users
  }) 
}

const getUser = (id) => {
  return Users.findById({ _id: id })
    .populate({
      path: 'post',
      populate: {path: 'comment'}
    })
    .then(user => {
      return user
    })
}

const createUser = (userInfo, hashPassword) => {
  let { username, password, email } = userInfo;
  const newUser = new Users({
    username: username,
    password: hashPassword,
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

const validateUser = async (payload) => {
  let { email, password } = payload;

  return await Users.findOne({email: email})
    .populate({
      path: 'post',
      populate: {path: 'comment'}
    })
    .then(user => {
      if (user && user.password == password) {
        return user;
      }
      return {error: 'user or password is invalid'}
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