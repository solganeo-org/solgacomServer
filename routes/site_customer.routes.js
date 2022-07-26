const express = require('express')
const router = express.Router()
const SiteCustomerController = require('../controller/site_customer.controller')

console.log(SiteCustomerController)

// Retrieve all users
router.get('/', SiteCustomerController.findAll)

// Create a new user
router.post('/', SiteCustomerController.create)

// Retrieve a single user with email
router.get('/site-id/:idSite', SiteCustomerController.findByIdSite)
router.get('/id/:id', SiteCustomerController.findById)

// Update a User with email
router.put('/:id', SiteCustomerController.update)

// Delete a employee with email
router.delete('/:id', SiteCustomerController.delete)

module.exports = router
