const model = require('../models/user.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

const createUser = (req, res, next) => {
  let { body } = req;
  let hashPassword = bcrypt.hashSync(body.password);
  let promise = model.createUser(body, hashPassword);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json({result, message: 'created a user'})
  })
  promise.catch(error => {
    next(error)
  })
}

const deleteUser = (req, res, next) => {
  let { id } = req.params;

  let promise = model.deleteUser(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })  
}

const updateUser = (req, res, next) => {
  let { body } = req;
  let { id } = req.params;
  let promise = model.updateUser(body, id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json({result, message: 'updated a user'})
  })
  promise.catch(error => {
    next(error)
  })
}

const validateUser = async (req, res, next) => {
  let { body } = req;
  let promise = await model.validateUser(body);

  if (promise.error) {
    return res.status(403).json({message: 'username or email invalid'})
  } else {
    let token = jwt.sign({
      id: promise._id
    }, 'secretkey', { expiresIn: '1hr' })

    return res.status(200).set({authorization: token}).json(promise)
  }
}

const addFollower = (req, res, next) => {
  let { body } = req;
  let promise = model.addFollower(body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json({result, message: 'updated a user'})
  })
  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  validateUser,
  addFollower
}