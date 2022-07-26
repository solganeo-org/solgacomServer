const express = require('express')
const router = express.Router()
const NotificationController =   require('../controller/notification.controller')

console.log(NotificationController)

// Retrieve all users
router.get('/', NotificationController.findAll);

// Create a new user
router.post('/', NotificationController.create);

// Retrieve a single user with email
router.get('/email/:email', NotificationController.findByEmail)
router.get('/id/:id', NotificationController.findById);

// Update a User with email
router.put('/:id', NotificationController.update);

// Delete a employee with email
router.delete('/:id', NotificationController.delete);

module.exports = router