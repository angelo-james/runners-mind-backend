const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/post.controllers');

router.post('/', ctrl.createPost);

module.exports = router;