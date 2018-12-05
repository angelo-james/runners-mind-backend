const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user.controllers');

router.get('/', ctrl.getUsers);
router.get('/:id', ctrl.getUser);

module.exports = router;