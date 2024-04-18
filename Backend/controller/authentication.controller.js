const userService = require("../services/user.service");
const authenticationService = require("../services/authentication.service");

// create a function to register a user
async function registerUser(req, res) {
  // Get the data from the request body
  const data = req.body;
  // Check if employee email already exists in the database
  const emailExists = await userService.checkIfUsersExists(data.user_email);

  if (emailExists) {
    // Check if the email address already exists in the database
    return res.status(400).json({
      message:
        "This email address is already associated with another customer!",
    });
  } else if (data.user_password.length < 8) {
    // Check if the password is at least 8 characters long
    return res.status(400).json({
      message: "Password must be at least 8 characters long!",
    });
  } else {
    // try to register the user
    try {
      // Call the register user function from the user service
      const registration = await authenticationService.registerUser(req.body);
      // Check if the registration was successful
      if (registration.status !== 200) {
        res.status(400).json({
          error: "Failed to add the customer!",
        });
      } else {
        res.status(200).json({
          status: "true",
          user: registration.createdUser,
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

// export the registerUser function
module.exports = { registerUser };
