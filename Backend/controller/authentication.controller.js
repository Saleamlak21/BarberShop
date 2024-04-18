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

// create a function to login a user
async function userLogin(req, res) {
  // Get the data from the request body
  const data = req.body;
  // Check if the user exists in the database
  const userExists = await userService.checkIfUsersExists(data.user_email);

  if (userExists) {
    // If the user exists, call the login function from the authentication service
    const login = await authenticationService.userLogin(data);
    console.log(login, "login")
    if (login.status !== 200) {
      // If the login is unsuccessful, send an error message to the client
      res.status(400).json({
        error: "Invalid email or password!",
      });
    } else {
      // If the login is successful, send the user object to the client
      res.status(200).json({
        status: "true",
        user: login.user,
      });
    }
  } else {
    // If the user does not exist, send an error message to the client
    res.status(400).json({
      error: "Invalid email or password!",
    });
  }
}


// export the registerUser function
module.exports = { registerUser, userLogin };
