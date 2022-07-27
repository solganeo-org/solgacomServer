const express = require('express')
const router = express.Router()
const sendNotification = require('../controller/sendnotification.controller')

console.log(sendNotification)

// Create a new user
router.post('/', sendNotification.send)

module.exports = router
