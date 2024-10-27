//import express
const express = require("express");
// call the router method from express
const router = express.Router();
// import the install route
const installRoutes = require("./install.routes");
// import the trade routes
const tradeRoutes = require("./trade.routes");

// define the install route
router.use(installRoutes);
router.use(tradeRoutes);

// export the router
module.exports = router;
