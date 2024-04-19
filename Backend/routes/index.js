//import express
const express = require("express");
// call the router method from express
const router = express.Router();
// import the install route
const installRoutes = require("./install.routes");
//import user routes
const authenticationRoutes = require("./authentication.routes");
// import the user routes
const userRoutes = require("./user.routes");

// define the install route
router.use(installRoutes);
// define the authenticationRoutes
router.use(authenticationRoutes);
// define the user routes
router.use(userRoutes);

// export the router
module.exports = router;
