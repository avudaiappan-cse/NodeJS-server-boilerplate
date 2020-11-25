const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/api/userController");

// route -> api/users/
router.get("/", userController.index);
// route -> api/users/login
router.get("/login", () => {});
// route -> api/users/signup
router.get("/signup", () => {});

module.exports = router;
