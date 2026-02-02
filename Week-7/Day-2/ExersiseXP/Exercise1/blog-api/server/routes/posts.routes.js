const express = require('express');
const router = express.Router();
const controller = require('../controllers/posts.controller');

router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPostById);
router.post('/posts', controller.createPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);

module.exports = router;
    