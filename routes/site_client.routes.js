const express = require('express')
const router = express.Router()
const SiteClientController =   require('../controller/site_client.controller')

console.log(SiteClientController)

// Retrieve all users
router.get('/', SiteClientController.findAll);

// Create a new user
router.post('/', SiteClientController.create);

// Retrieve a single user with email
router.get('/client-id/:id', SiteClientController.findByIdSite)
router.get('/id/:id', SiteClientController.findById);

// Update a User with email
router.put('/:id', SiteClientController.update);

// Delete a employee with email
router.delete('/:id', SiteClientController.delete);

module.exports = router