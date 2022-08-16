const express = require("express");
const router = express.Router();
const subscription = require("../controller/subscription.controller");

// Create a new user
router.post("/", subscription.subscribe);

module.exports = router;
