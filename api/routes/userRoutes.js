const express = require("express");
const { registerUser } = require("../controllers/user");

// creating router
const router = express.Router();

// routes
router.route("/register").post(registerUser);

module.exports = router;
