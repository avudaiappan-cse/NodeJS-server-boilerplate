const express = require("express");
const { route } = require("..");
const router = express.Router();

router.use("/users", require("./users"));

module.exports = router;
