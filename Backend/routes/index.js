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
// import the service routes
const serviceRoutes = require("./service.routes");
// import the appointment routes
const appointmentRoutes = require("./appointment.routes");
// import the review routes
const reviewRoutes = require("./reviews.routes");

// define the install route
router.use(installRoutes);
// define the authenticationRoutes
router.use(authenticationRoutes);
// define the user routes
router.use(userRoutes);
// define the service routes
router.use(serviceRoutes);
// define the appointment routes
router.use(appointmentRoutes);
// define the review routes
router.use(reviewRoutes);

// export the router
module.exports = router;
