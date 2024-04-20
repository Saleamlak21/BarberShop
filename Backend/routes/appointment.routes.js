// import express
const express = require("express");
// call the router method from express
const router = express.Router();
// import the appointment controller
const appointmentController = require("../controller/appointment.controller");

// define the appointment route
router.post("/api/appointment", appointmentController.createAppointment);
// define the get appointment route
router.get("/api/appointments", appointmentController.getAppointments);
// define the get appointment by id route
router.get("/api/appointment/:id", appointmentController.getAppointmentById);
// define the route to get all appointment by userid
router.get("/api/appointment/user/:id", appointmentController.getAppointmentsByUserId);
// define the update appointment route
router.put("/api/appointment/:id", appointmentController.updateAppointment);
// define the delete appointment route
router.delete("/api/appointment/:id", appointmentController.deleteAppointment);

// export the router
module.exports = router;