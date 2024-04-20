// import express
const express = require('express');
// import router
const router = express.Router();
// import service controller
const serviceController = require("../controller/service.controller");

// define the a route to create a service
router.post("/api/create-service",serviceController.createService);
// define the a route to get all services
router.get("/api/get-services",serviceController.getServices);
// define the a route to get a single service
router.get("/api/get-service/:id",serviceController.getServiceById);




// export the router
module.exports = router;



