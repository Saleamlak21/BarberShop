// import the user service
const userService = require("../services/user.service");
// import the authentication service
const authenticationService = require("../services/authentication.service");
//import jwt
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// create a function to register a user
async function registerUser(req, res) {
  console.log(req.body, "req.body");
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
  if (!userExists) {
    // If the user does not exist, send an error message to the client
    return res.status(400).json({
      status: 400,
      code: "INVALID_EMAIL",
      error: "Invalid email Address!",
    });
  }

  if (userExists) {
    // If the user exists, call the login function from the authentication service
    const login = await authenticationService.userLogin(data);

    if (login.status !== 200) {
      // If the login is unsuccessful, send an error message to the client
      res.status(400).json(login);
    } else {
      const payLoad = {
        user_id: login.user.user_id,
        user_name: login.user.user_name,
        user_role: login.user.user_role_id,
      };
      // If the login is successful, create a token for the user
      const token = jwt.sign(payLoad, jwtSecret, {
        expiresIn: "24h",
      });
      // Send the token to the client
      res.status(200).json({
        status: "true",
        user_name: login.user.user_name,
        token: token,
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
