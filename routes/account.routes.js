const express = require('express')
const router = express.Router()
const accountController =   require('../controller/account.controller')

console.log(accountController)

// Retrieve all users
router.get('/', accountController.findAll);

// Create a new user
router.post('/', accountController.create);

// Retrieve a single user with email
router.get('/email/:email', accountController.findByEmail)
router.get('/id/:id', accountController.findById);

// Update a User with email
router.put('/:id', accountController.update);

// Delete a employee with email
router.delete('/:id', accountController.delete);

module.exports = router