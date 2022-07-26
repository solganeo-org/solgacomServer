const express = require('express')
const router = express.Router()
const ContactController = require('../controller/contact.controller')

// Retrieve all users
router.get('/', ContactController.findAll)

// Create a new user
router.post('/', ContactController.create)

// Retrieve a single user with email
router.get('/id/:id', ContactController.findById)
router.get('/email/:email', ContactController.findByEmail)

// Update a User with email
router.put('/:id', ContactController.update)

// Delete a employee with email
router.delete('/:id', ContactController.delete)

module.exports = router
