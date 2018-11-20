const express = require('express');
const router = express.Router();

const Users = require('../models/user.models');

router.get('/', (req, res) => {
  Users.find()
  .then(users => res.json(users))
});

router.post('/', (req, res) => {
  const newUser = new Users({
    name: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  newUser.save().then(users => res.json(users))
})

module.exports = router;