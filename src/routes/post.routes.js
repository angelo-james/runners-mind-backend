const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/post.controllers');

router.post('/', ctrl.createPost);
router.delete('/:id', ctrl.deletePost);
router.put('/:id', ctrl.updatePost);

module.exports = router;