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
// create a function to get all services
async function getServices(req, res) {
  try {
    // Call the get services function from the service service
    const services = await service.getServices();
    // Check if the services were found
    if (services.status !== 200) {
      // If no services were found, send a message to the client
      res.status(404).json({
        message: "No services found!",
      });
    } else {
      // If services were found, send them to the client
      res.status(200).json({
        services: services.data,
      });
    }
  } catch (error) {
    // If an error occurs, send an error message to the client
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}
// create a function to get a single service
async function getServiceById(req, res) {
  // Get the service id from the request parameters
  const id = req.params.id;
  try {
    // Call the get service by id function from the service service
    const singleService = await service.getServiceById(id);
    console.log(singleService);
    // Check if the service was found
    if (singleService.status !== 200) {
      // If the service was not found, send a message to the client
      res.status(404).json({
        message: "Service not found!",
      });
    } else {
      // If the service was found, send it to the client
      res.status(200).json({
        service: singleService.data,
      });
    }
  } catch (error) {
    // If an error occurs, send an error message to the client
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// create a function to update a service
async function updateService(req, res) {
  // Get the service id from the request parameters
  const id = req.params.id;
  // Get the data from the request body
  const data = req.body;
  try {
    // Call the update service function from the service service
    const updatedService = await service.updateService(data, id);
    // Check if the service was updated
    if (updatedService.status !== 200) {
      // If the service was not updated, send a message to the client
      res.status(400).json({
        message: "Failed to update the service!",
      });
    } else {
      // If the service was updated, send a message to the client
      res.status(200).json({
        status: "true",
        message: "Service updated successfully!",
      });
    }
  } catch (error) {
    // If an error occurs, send an error message to the client
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// create a function to delete a service
async function deleteService(req, res) {
  // Get the service id from the request parameters
  const id = req.params.id;
  try {
    // Call the delete service function from the service service
    const deletedService = await service.deleteService(id);
    // Check if the service was deleted
    if (deletedService.status !== 200) {
      // If the service was not deleted, send a message to the client
      res.status(400).json({
        message: "Failed to delete the service!",
      });
    } else {
      // If the service was deleted, send a message to the client
      res.status(200).json({
        status: "true",
        message: "Service deleted successfully!",
      });
    }
  } catch (error) {
    // If an error occurs, send an error message to the client
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// export the functions
module.exports = {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
};
