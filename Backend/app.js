// Importing necessary modules
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser'); // Optional if you're using express.json() and express.urlencoded()
require("dotenv").config(); // Load environment variables
const router = require("./routes/index"); // Importing the routes

// Creating an express app
const app = express();

// Using CORS 
app.use(cors());

// Set up body-parser middleware
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Add the routes to the app
app.use(router);

// App listening on port 3001
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// Export the webserver for use in the application
module.exports = app;
