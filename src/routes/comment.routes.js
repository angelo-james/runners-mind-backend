const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/comment.controllers');

router.post('/', ctrl.createComment);

module.exports = router;