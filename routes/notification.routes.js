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
router.get('/contact-id/:id_contact', NotificationController.findByContactId);
router.get('/site-id/:id_site', NotificationController.findBySiteId);

// Update a User with email
router.put('/update/:id', NotificationController.update);

// Delete a employee with email
router.delete('/delete/:id', NotificationController.delete);

module.exports = router
