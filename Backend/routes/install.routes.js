// emport express
// import express from "express";
const express = require("express");
// call the router method from express
const router = express.Router();
// import the install controller
const installController = require("../controller/install.controller");


// define the install route
router.get("/install", installController.install);


// export the router
module.exports = router;