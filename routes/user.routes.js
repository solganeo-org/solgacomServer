const express = require('express')
const router = express.Router()
const userController =   require('../controller/user.controller')

// Retrieve all users
router.get('/', userController.findAll);

// Create a new user
router.post('/', userController.create);

// Retrieve a single user with email
router.get('/id/:id', userController.findById);
router.get('/email/:email', userController.findByEmail);

// Update a User with email
router.put('/:id', userController.update);

// Delete a employee with email
router.delete('/:id', userController.delete);

module.exports = router