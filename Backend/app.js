// Importing necessary modules
const express = require("express");
const cors = require("cors");
const http = require("http");
// import server from socket.io
const { Server } = require("socket.io");
// Import the sanitizer module
const sanitize = require("sanitize");
// Importing the routes
const router = require("./routes/index");

// Creating an express app
const app = express();
// Using cors
// app.use(cors());
// Creating a server
const server = http.createServer(app);
// Creating an instance of socket.io
const io = new Server(server, { cors: { origin: "*" } });
// Add the express.json middleware to the application
app.use(express.json());
// add sanitization middleware
app.use(sanitize.middleware);

// add the routes to the app
app.use(router);

// app listening on port 3001
server.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// Export the webserver for use in the application
module.exports = app;

