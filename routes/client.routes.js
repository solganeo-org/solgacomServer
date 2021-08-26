const express = require('express')
const router = express.Router()
const clientController =   require('../controller/client.controller')

console.log(clientController)

// Retrieve all users
router.get('/', clientController.findAll);

// Create a new user
router.post('/', clientController.create);

// Retrieve a single user with email
router.get('/email/:email', clientController.findByEmail)
router.get('/id/:id', clientController.findById);

// Update a User with email
router.put('/:id', clientController.update);

// Delete a employee with email
router.delete('/:id', clientController.delete);

module.exports = router