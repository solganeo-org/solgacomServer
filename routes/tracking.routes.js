const express = require('express')
const router = express.Router()
const trackingController =   require('../controller/tracking.controller')

// Retrieve all trackings
router.get('/', trackingController.findAll);

// Create a new tracking
router.post('/', trackingController.create);

// Retrieve a single tracking with email
router.get('/id/:id', trackingController.findById);

// Update a tracking with email
router.put('/:id', trackingController.update);

// Delete a employee with email
router.delete('/:id', trackingController.delete);

module.exports = router