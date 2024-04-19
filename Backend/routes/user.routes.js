// import express
const express = require('express');
// import router
const router = express.Router();
// import the user controller
const userController = require("../controller/user.controller");

// define the a route to get all users
router.get("/api/get-users",userController.getUsers);
// define the a route to get a single user
router.get("/api/get-user/:id",userController.getUserById);


// export the router
module.exports = router;


