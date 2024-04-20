// import connection
const conn = require("../config/db.config");

// create an appointment
async function createAppointment(appointment) {
  try {
    const query1 = `INSERT INTO appointments (user_id, service_id, company_role_id, appointment_date, additional_request) VALUES (?, ?, ?, ?, ?)`;
    const row1 = await conn.query(query1, [
      appointment.user_id,
      appointment.service_id,
      appointment.company_role_id,
      appointment.appointment_date,
      appointment.additional_request,
    ]);

    if (row1.affectedRows === 0) {
      throw new Error(
        "Failed to insert appointment data into appointments table"
      );
    }
    console.log("added appointment data into appointments table");
    const appointment_id = row1.insertId;

    const query2 = `INSERT INTO appointment_info (appointment_id, appointment_completed, appointment_cancelled) VALUES (?, ?, ?)`;
    const row2 = await conn.query(query2, [appointment_id, 0, 0]);

    if (row2.affectedRows === 0) {
      throw new Error(
        "Failed to insert appointment data into appointment_info table"
      );
    }

    return {
      message: "Appointment created successfully",
      appointment_id: appointment_id,
    };
  } catch (error) {
    console.error("Error creating appointment:", error);
    return {
      error: "Failed to create appointment",
      status: 400,
    };
  }
}

// create a function to get all appointments
async function getAppointments(req, res) {
  try {
    const query = `SELECT * FROM appointments INNER JOIN appointment_info ON appointments.appointment_id = appointment_info.appointment_id`;
    const rows = await conn.query(query);

    if (rows.length === 0) {
      return res.status(404).json({ error: "No appointments found" });
    }
    return {
      message: "Appointments retrieved successfully",
      appointments: rows,
    };
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// create a function to get an appointment by id
async function getAppointmentById(id) {
  try {
    const query = `SELECT * FROM appointments INNER JOIN appointment_info ON appointments.appointment_id = appointment_info.appointment_id WHERE appointments.appointment_id = ?`;
    const rows = await conn.query(query, [id]);

    if (rows.length === 0) {
      return {
        status: 404,
        error: "Appointment not found",
      };
    }
    return {
      status: 200,
      message: "Appointment retrieved successfully",
      appointment: rows,
    };
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// create a function to get all appointments by user id
async function getAppointmentsByUserId(id) {
  try {
    const query = `SELECT * FROM appointments INNER JOIN appointment_info ON appointments.appointment_id = appointment_info.appointment_id WHERE appointments.user_id = ?`;
    const rows = await conn.query(query, [id]);

    if (rows.length === 0) {
      return {
        status: 404,
        error: "Appointment not found",
      };
    }
    return {
      status: 200,
      message: "Appointment retrieved successfully",
      appointments: rows,
    };
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// create a function to update an appointment
async function updateAppointment(id, appointment) {
  try {
    let query =
      "UPDATE appointments INNER JOIN appointment_info ON appointments.appointment_id = appointment_info.appointment_id SET ";

    const queryValues = [];
    const updateFieldes = [];

    if (appointment.user_id !== undefined && appointment.user_id !== null) {
      updateFieldes.push("appointments.user_id = ?");
      queryValues.push(appointment.user_id);
    }

    if (
      appointment.service_id !== undefined &&
      appointment.service_id !== null
    ) {
      updateFieldes.push("appointments.service_id = ?");
      queryValues.push(appointment.service_id);
    }

    if (
      appointment.company_role_id !== undefined &&
      appointment.company_role_id !== null
    ) {
      updateFieldes.push("appointments.company_role_id = ?");
      queryValues.push(appointment.company_role_id);
    }

    if (
      appointment.appointment_date !== undefined &&
      appointment.appointment_date !== null
    ) {
      updateFieldes.push("appointments.appointment_date = ?");
      queryValues.push(appointment.appointment_date);
    }

    if (
      appointment.additional_request !== undefined &&
      appointment.additional_request !== null
    ) {
      updateFieldes.push("appointments.additional_request = ?");
      queryValues.push(appointment.additional_request);
    }

    if (
      appointment.appointment_completed !== undefined &&
      appointment.appointment_completed !== null
    ) {
      updateFieldes.push("appointment_info.appointment_completed = ?");
      queryValues.push(appointment.appointment_completed);
    }

    if (
      appointment.appointment_cancelled !== undefined &&
      appointment.appointment_cancelled !== null
    ) {
      updateFieldes.push("appointment_info.appointment_cancelled = ?");
      queryValues.push(appointment.appointment_cancelled);
    }

    if (updateFieldes.length === 0) {
      // No valid fields to update
      return {
        status: 400,
        data: "No valid fields to update",
      };
    }

    query += updateFieldes.join(", ");
    query += ` WHERE appointments.appointment_id = ?`;
    queryValues.push(id);

    const row = await conn.query(query, queryValues);

    if (row.affectedRows > 0) {
      return {
        status: 200,
        data: "Appointment updated successfully",
      };
    }
    return {
      status: 404,
      data: "Appointment not found",
    };
  } catch (error) {
    return {
      status: 500,
      error: error.message,
    };
  }
}

// create a function to delete an appointment
async function deleteAppointment(id) {
  try {
    // Delete related records from appointment_info table first
    await conn.query("DELETE FROM appointment_info WHERE appointment_id = ?", [
      id,
    ]);

    // Then delete the appointment from appointments table
    const row = await conn.query(
      "DELETE FROM appointments WHERE appointment_id = ?",
      [id]
    );

    if (row.affectedRows > 0) {
      console.log("true");
      return {
        status: 200,
        data: "Appointment deleted successfully",
      };
    }
    return {
      status: 404,
      data: "Appointment not found",
    };
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return {
        status: 503,
        error: "Database connection refused",
      };
    }
    return {
      status: 500,
      error: error.message,
    };
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
