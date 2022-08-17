const express = require('express')
const router = express.Router()
const ProfileController =   require('../controller/profile.controller')

console.log(ProfileController)

// Retrieve all users
router.get('/', ProfileController.findAll);

// Create a new user
router.post('/', ProfileController.create);

// Retrieve a single user with email
router.get('/id/:id', ProfileController.findById);
router.get('/idProfileName/:id', ProfileController.findByIdNameProfile);
router.get('/account-id/:account_id', ProfileController.findByAccountId);

// Update a User with email
router.put('/:id', ProfileController.update);

// Delete a employee with email
router.delete('/delete/:id', ProfileController.delete);

module.exports = router
