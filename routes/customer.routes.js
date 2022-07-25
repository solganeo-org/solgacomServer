const express = require('express')
const router = express.Router()
const customerController =   require('../controller/customer.controller')

console.log(customerController)

// Retrieve all users
router.get('/', customerController.findAll);

// Create a new user
router.post('/', customerController.create);

// Retrieve a single user with email
router.get('/email/:email', customerController.findByEmail)
router.get('/id/:id', customerController.findById);

// Update a User with email
router.put('/:id', customerController.update);

// Delete a employee with email
router.delete('/:id', customerController.delete);

module.exports = router