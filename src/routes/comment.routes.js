const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/comment.controllers');

router.post('/', ctrl.createComment);
router.delete('/:id', ctrl.deleteComment);
router.put('/:id', ctrl.updateComment);
router.get('/', ctrl.getComments);

module.exports = router;