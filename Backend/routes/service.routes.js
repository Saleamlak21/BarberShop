// import express
const express = require('express');
// import router
const router = express.Router();
// import service controller
const serviceController = require("../controller/service.controller");

// define the a route to create a service
router.post("/api/create-service",serviceController.createService);




// export the router
module.exports = router;



