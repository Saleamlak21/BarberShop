//import express
const express = require("express");
// call the router method from express
const router = express.Router();
// import the install route
const installRoutes = require("./install.routes");
//import user routes
const authenticationRoutes = require("./authentication.routes");

// define the install route
router.use(installRoutes);
// define the authenticationRoutes
router.use(authenticationRoutes);

// export the router
module.exports = router;
