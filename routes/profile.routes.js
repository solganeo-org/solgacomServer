const express = require('express')
const router = express.Router()
const ProfileController = require('../controller/profile.controller')

console.log(ProfileController)

// Retrieve all users
router.get('/', ProfileController.findAll)

// Create a new user
router.post('/', ProfileController.create)

// Retrieve a single user with email
router.get('/id/:id', ProfileController.findById)

// Update a User with email
router.put('/:id', ProfileController.update)

// Delete a employee with email
router.delete('/:id', ProfileController.delete)

module.exports = router
