const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUserById);
router.put('/users/:id', controller.updateUser);

module.exports = router;
