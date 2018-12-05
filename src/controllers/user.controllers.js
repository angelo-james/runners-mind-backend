const model = require('../models/user.models');

const getUsers = (req, res, next) => {
  let promise = model.getUsers();

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

const getUser = (req, res, next) => {
  let { id } = req.params

  let promise = model.getUser(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })  
}

module.exports = {
  getUsers,
  getUser
}