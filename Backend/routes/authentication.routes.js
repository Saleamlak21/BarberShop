// import express
const express = require("express");
// call the router method from express
const router = express.Router();
// import the user controller
const authenticationController = require("../controller/authentication.controller");

// define the register routes
router.post("/register-user",authenticationController.registerUser);
// define the login route
router.post("/user-login", authenticationController.userLogin);


// export the router
module.exports = router;
