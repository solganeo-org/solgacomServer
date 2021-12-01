const express = require('express')
const router = express.Router()
const siteController =   require('../controller/site.controller')

console.log(siteController)

// Retrieve all users
router.get('/', siteController.findAll);

// Create a new user
router.post('/', siteController.create);

// Retrieve a single user with email
router.get('/id/:id', siteController.findById);

// Update a User with email
router.put('/:id', siteController.update);

// Delete a employee with email
router.delete('/delete/:id', siteController.delete);

module.exports = router