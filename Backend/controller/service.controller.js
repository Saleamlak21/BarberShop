// import service sercice 
const service = require("../services/service.service");

// create a function to create a service
async function createService(req, res) {
  // Get the data from the request body
  const data = req.body;
  // Check if the service already exists in the database
  const serviceExists = await service.checkIfServiceExists(data.service_name);
  if (serviceExists) {
    // Check if the service already exists in the database
    return res.status(400).json({
      message: "This service already exists!",
    });
  } else {
    // try to create the service
    try {
      // Call the create service function from the service service
      const serviceAdded = await service.createService(data);
      // Check if the service was created successfully
      if (serviceAdded.status !== 200) {
        res.status(400).json({
          error: "Failed to create the service!",
        });
      } else {
        res.status(200).json({
          status: "true",
          service: service.createdService,
        });
      }
    } catch (error) {
      // If an error occurs, send an error message to the client
      res.status(400).json({
        error: "Something went wrong!",
      });
    }
  }
}

// export the functions
module.exports = {
  createService,
};