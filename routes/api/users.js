const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/api/userController");

// route -> api/users/
router.get("/", userController.index);
// route -> api/users/login
router.post("/login", userController.login);
// route -> api/users/signup
router.post("/signup", userController.signup);

module.exports = router;
