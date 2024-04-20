// import conn from "../config/db.config";
const conn = require("../config/db.config");

// Create the functions to check if the service exists by service name
async function checkIfServiceExists(service_name) {
  try {
    // Query to check if the service exists
    const query = "SELECT * FROM common_services WHERE service_name = ?";
    // Execute the query
    const rows = await conn.query(query, [service_name]);
    console.log(rows, service_name);
    // Return true if the service exists
    return rows.length > 0;
  } catch (err) {
    // Return an error message if an error occurs
    return err;
  }
}

// create a function to create a service
async function createService(data) {
  try {
    // Query to insert the service into the database
    const query =
      "INSERT INTO common_services (service_name,service_description,service_price) VALUES (?,?,?)";
    // Execute the query
    const rows = await conn.query(query, [
      data.service_name,
      data.service_discription,
      data.service_price,
    ]);
    console.log(rows, data);
    // Return the created service
    if (rows.affectedRows > 0) {
      return {
        status: 200,
        createdService: data,
      };
    } else {
      return {
        status: 400,
        error: "Failed to create the service!",
      };
    }
  } catch (err) {
    // Return an error message if an error occurs
    return err;
  }
}

// Create a function to get all services
async function getServices() {
  try {
    // Query to get all services
    const query = "SELECT * FROM common_services";
    // Execute the query
    const rows = await conn.query(query);
    // Return the services
    if (rows.length > 0) {
      return {
        status: 200,
        data: rows,
      };
    } else {
      return {
        status: 404,
        data: "No services found",
      };
    }
  } catch (err) {
    // Return an error message if an error occurs
    return err;
  }
}

// Create a function to get a single service
async function getServiceById(id) {
  try {
    console.log(id)
    // Query to get the service by id
    const query = "SELECT * FROM common_services WHERE service_id = ?";
    // Execute the query
    const rows = await conn.query(query, [id]);
    // Return the service
    if (rows.length > 0) {
      return {
        status: 200,
        data: rows,
      };
    } else {
      return {
        status: 404,
        data: "Service not found",
      };
    }
  } catch (err) {
    // Return an error message if an error occurs
    return err;
  }
}

//export the functions
module.exports = {
  checkIfServiceExists,
  createService,
  getServices,
  getServiceById,
};
