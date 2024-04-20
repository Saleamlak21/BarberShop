// import the Appointment service
const e = require("express");
const appointmentService = require("../services/appointment.service");
// import io from app.js
// const { io } = require("../app");

// create a function to create an appointment
async function createAppointment(req, res) {
  try {
    console.log(req.body);
    // checek if the request body is empty
    if (!req.body) {
      // return an error
      return res.status(400).json({ error: "Body cannot be empty" });
    }

    // check the date of appointment is in the past
    const appointmentDate = new Date(req.body.appointment_date);
    const currentDate = new Date();
    if (appointmentDate < currentDate) {
      // return an error
      return res
        .status(400)
        .json({ error: "Appointment date cannot be in the past" });
    }

    // check if appointment date is today
    if (appointmentDate.toDateString() === currentDate.toDateString()) {
      // return an error
      return res
        .status(400)
        .json({ error: "Appointment date cannot be today" });
      // io.on("connection", (socket) => {
      //     console.log(`user connected: ${socket.id}`)

      //     socket.on("join_room",(data) => {
      //        socket.join(data)
      //     })

      //     socket.on("send_message", (data) => {
      //     //   socket.broadcast.emit("receive_message", data)
      //     socket.to(data.room).emit("receive_message", data)
      //     })
      // })
    }

    // call the createAppointment method from the appointment service
    const appointment = await appointmentService.createAppointment(req.body);
    if (appointment) {
      // return the appointment
      return res.status(201).json(appointment);
    } else {
      // return the error
      return res.status(400).json({ error: "Failed to create appointment" });
    }
  } catch (error) {
    // return the error
    return res.status(500).json({ error: error.message });
  }
}

// create a function to get all appointments
async function getAppointments(req, res) {
  try {
    // call the getAppointments method from the appointment service
    const appointments = await appointmentService.getAppointments();
    if (appointments) {
      // return the appointments
      return res.status(200).json(appointments);
    } else {
      // return the error
      return res.status(400).json({ error: "Failed to get appointments" });
    }
  } catch (error) {
    // return the error
    return res.status(500).json({ error: error.message });
  }
}

// create a function to get an appointment by id
async function getAppointmentById(req, res) {
  try {
    // get the appointment id from the request params
    const id = req.params.id;
    // call the getAppointmentById method from the appointment service
    const appointment = await appointmentService.getAppointmentById(id);

    if (appointment.status !== 200) {
      // return
      return res.status(404).json(appointment);
    } else {
      // return the error
      return res.status(200).json(appointment);
    }
  } catch (error) {
    // return the error
    return res.status(500).json({ error: "something went wrong" });
  }
}

// create a function to get all appointments by user id
async function getAppointmentsByUserId(req, res) {
  try {
    // get the user id from the request params
    const id = req.params.id;
    // call the getAppointmentsByUserId method from the appointment service
    const appointments = await appointmentService.getAppointmentsByUserId(id);

    if (appointments.status !== 200) {
      // return
      return res.status(404).json(appointments);
    } else {
      // return the error
      return res.status(200).json(appointments);
    }
  } catch (error) {
    // return the error
    return res.status(500).json({ error: "something went wrong" });
  }
}

// create a function to update an appointment
async function updateAppointment(req, res) {
  try {
    // get the appointment id from the request params
    const id = req.params.id;
    // call the updateAppointment method from the appointment service
    const appointment = await appointmentService.updateAppointment(
      id,
      req.body
    );

    if (appointment.status !== 200) {
      // return
      return res.status(404).json(appointment);
    } else {
      // return the error
      return res.status(200).json(appointment);
    }
  } catch (error) {
    // return the error
    return res.status(500).json({ error: "something went wrong" });
  }
}

// create a function to delete an appointment
async function deleteAppointment(req, res) {
  try {
    // get the appointment id from the request params
    const id = req.params.id;
    // call the deleteAppointment method from the appointment service
    const appointment = await appointmentService.deleteAppointment(id);

    if (appointment.status !== 200) {
      // return
      return res.status(404).json(appointment);
    } else {
      // return the error
      return res.status(200).json(appointment);
    }
  } catch (error) {
    // return the error
    return res.status(500).json({ error: "something went wrong" });
  }
}

// export the createAppointment function
module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  getAppointmentsByUserId,
  updateAppointment,
  deleteAppointment,
};
