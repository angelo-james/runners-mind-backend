const express = require('express');
const router = express.Router();

const Users = require('../models/user.models');

router.get('/', (req, res) => {
  Users.find()
  .then(users => res.status(200).json({ data: users }))
});

router.post('/', (req, res) => {
  let { username, password, email } = req.body;
  const newUser = new Users({
    name: username,
    password: password,
    email: email
  })
  newUser.save().then(users => res.status(200).json({ data: users, message: 'Successfully created a new user.' }))
    .catch(error => res.status(404).json({ data: error, message: 'Failed to create a user.' }))
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id

  Users.findById(userId)
    .then(item => item.remove().then(() => res.status(200).json({ message: 'Successfuly deleted user account.' })))
    .catch(error => res.status(404).json({ message: 'Failed to delete user.' }))
});

module.exports = router;