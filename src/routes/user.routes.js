const express = require('express');
const router = express.Router();

const Users = require('../models/user.models');

router.get('/', (req, res) => {
  Users.find()
  .then(users => res.status(200).json({ data: users }))
});

router.post('/', (req, res) => {
  console.log(req.body);
  let { username, password, email } = req.body;
  const newUser = new Users({
    username: username,
    password: password,
    email: email
  })
  newUser.save().then(users => res.status(200).json({ data: users, message: 'Successfully created a new user.' }))
    .catch(error => res.status(404).json({ data: error, message: 'Failed to create a user.' }))
});

router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  let user = await Users.find({email: email})
  return res.status(200).json({
    username: user[0].username,
    followers: user[0].followers,
    following: user[0].following,
    userId: user[0]._id
  })
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id

  Users.findById({_id: userId})
    .then(user => user.remove().then(() => res.status(200).json({ data: user, message: 'Successfuly deleted user account.' })))
    .catch(error => res.status(404).json({ error, message: 'Failed to delete user.' }))
});

router.put('/:id', (req, res) => {
  let { username, password, email } = req.body;
  const userId = req.params.id
  const payload = {
    username: username,
    password: password,
    email: email
  }
  Users.findByIdAndUpdate({_id: userId}, payload).then(() => {
    Users.findOne({_id: userId}).then(user => {
      res.status(200).json({ data: user, message: 'Successfully updated user info' })
    })
    .catch(error => res.status(404).json(error))
  })
    
})

module.exports = router;