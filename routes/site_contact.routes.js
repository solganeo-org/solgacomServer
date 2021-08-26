const express = require('express')
const router = express.Router()
const siteContactController =   require('../controller/site_contact.controller')

console.log(siteContactController)

// Retrieve all users
router.get('/', siteContactController.findAll);

// Create a new user
router.post('/', siteContactController.create);

// Retrieve a single user with email
router.get('/account-id/:id', siteContactController.findByContactId)
router.get('/id/:id', siteContactController.findById);

// Update a User with email
router.put('/:id', siteContactController.update);

// Delete a employee with email
router.delete('/:id', siteContactController.delete);

module.exports = router