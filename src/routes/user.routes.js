const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user.controllers');

router.get('/', ctrl.getUsers);
router.get('/:id', ctrl.getUser);
router.post('/', ctrl.createUser);
router.delete('/:id', ctrl.deleteUser);
router.put('/:id', ctrl.updateUser);
router.post('/login', ctrl.validateUser);

module.exports = router;