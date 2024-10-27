// import the install service 
// import installService from "../services/install.services";
const installService = require("../services/install.service");
// create a function to install the application
async function install(req, res) {
  // call the install function from the install service
  const installMessage = await installService.install();
  
  // check if the installation is successfu
  if (installMessage.status === 200) {
    // If successful, send a response to the client
    res.status(200).json({
      message: installMessage,
    });
  } else {
    // If unsuccessful, send a response to the client
    res.status(500).json({
      message: installMessage,
    });
  }
  
}

// export the install function
module.exports = { install };