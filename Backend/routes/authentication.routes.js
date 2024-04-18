// import express
const express = require("express");
// call the router method from express
const router = express.Router();
// import the user controller
const userController = require("../controller/authentication.controller");

// define the user routes

router.post("/register-user", userController.registerUser);

// export the router
module.exports = router;
