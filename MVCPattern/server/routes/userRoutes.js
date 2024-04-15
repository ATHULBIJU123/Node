const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const bcrypt = require('bcryptjs');
const ObjectId = require('mongoose')


router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getSingleUser);
router.put('/users', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);


module.exports = router; 