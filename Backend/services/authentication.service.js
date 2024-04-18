//import the database connection
const conn = require("../config/db.config");
//import crypto to hash the customer data
const crypto = require("crypto");
// Import the bcrypt module
const bcrypt = require("bcrypt");

// Create the registerUser function
async function registerUser(user) {
  let createdUser = {};
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    const hashedPassword = await bcrypt.hash(user.user_password, salt);

    // Create a SHA-256 hash of the customer data
    const dataToHash = `${user.user_email}-${user.user_phone_number}`;
    const hashedData = crypto
      .createHash("sha256")
      .update(dataToHash)
      .digest("hex");

    // Insert the email and hash into the customer_identifier table
    const query1 =
      "INSERT INTO user_identifier(user_email,user_name,user_hash) VALUES (?, ?, ?)";
    const rows1 = await conn.query(query1, [
      user.user_email,
      user.user_name,
      hashedData,
    ]);

    if (rows1.affectedRows !== 1) {
      return false;
    }

    // Get the user_id from the first insert
    const user_id = rows1.insertId;

    // Insert the remaining data into the user_info table
    const query2 =
      "INSERT INTO user_info(user_id, user_first_name, user_last_name,user_phone_number,active_user_status) VALUES (?,?,?,?,?)";
    const rows2 = await conn.query(query2, [
      user_id,
      user.user_first_name,
      user.user_last_name,
      user.user_phone_number,
      user.active_user_status,
    ]);

    if (rows2.affectedRows !== 1) {
      return false;
    }

    // Insert the password into the user_pass table
    const query3 =
      "INSERT INTO user_pass(user_id, user_password_hashed) VALUES (?, ?)";
    const row3 = await conn.query(query3, [user_id, hashedPassword]);

    if (row3.affectedRows !== 1) {
      return false;
    }

    // insert 1 into the user_role table
    const query4 =
      "INSERT INTO user_role(user_id, company_role_id) VALUES (?, ?)";
    const row4 = await conn.query(query4, [user_id, 1]);

    if (row4.affectedRows !== 1) {
      return false;
    }

    // constract the user object to return
    createdUser = {
      user_id: user_id,
      user_name: user.user_name,
      user_email: user.user_email,
      user_first_name: user.user_first_name,
      user_last_name: user.user_last_name,
      user_phone_number: user.user_phone_number,
      active_user_status: user.active_user_status,
      hashedData: hashedData,
    };
    return {
      status: 200,
      createdUser,
      message: "User created successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to create user",
    };
  }
}

//create the login function
async function userLogin(user) {
  try {
    // Get the user data from the user_identifier table
    const query1 =
      "SELECT user_identifier.*, user_info.user_first_name,user_info.user_last_name,user_info.user_phone_number,user_info.active_user_status, user_role.company_role_id, user_pass.user_password_hashed FROM user_identifier INNER JOIN  user_info ON user_identifier.user_id = user_info.user_id INNER JOIN  user_pass ON user_identifier.user_id = user_pass.user_id INNER JOIN user_role ON user_identifier.user_id = user_role.user_id WHERE user_identifier.user_email = ?";

    // create the query to get the user data
    const rows1 = await conn.query(query1, [user.user_email]);
    if (rows1.length !== 1) {
      return {
        status: 400,
        message: "Invalid email or password",
      };
    }

    // // Construct the user object to return
    const userObject = {
      user_id: rows1[0].user_id,
      user_name: rows1[0].user_name,
      user_email: rows1[0].user_email,
      user_first_name: rows1[0].user_first_name,
      user_last_name: rows1[0].user_last_name,
      user_phone_number: rows1[0].user_phone_number,
      active_user_status: rows1[0].active_user_status,
      user_role_id: rows1[0].company_role_id,
      user_hash: rows1[0].user_hash,
      user_added_date: rows1[0].user_added_date,
    };

    return {
      status: 200,
      user: userObject,
      message: "User logged in successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Failed to login user",
    };
  }
}

// Export the functions for use in the controller
module.exports = { registerUser, userLogin };
