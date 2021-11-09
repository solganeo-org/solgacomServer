const express = require('express')
const router = express.Router()
const SiteRuleController =   require('../controller/site_rule.controller')

console.log(SiteRuleController)

// Retrieve all users
router.get('/', SiteRuleController.findAll);

// Create a new user
router.post('/', SiteRuleController.create);

// Retrieve a single user with email
router.get('/rule-id/:id', SiteRuleController.findByIdSite)
router.get('/id/:id', SiteRuleController.findById);

// Update a User with email
router.put('/:id', SiteRuleController.update);

// Delete a employee with email
router.delete('/:id', SiteRuleController.delete);

module.exports = router