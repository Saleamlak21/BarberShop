//import the database connection
const conn = require("../config/db.config");

// Create the functions if the customer exists and to create the customer
async function checkIfUsersExists(email) {
  console.log(email);
  const query = "SELECT * FROM user_identifier WHERE user_email = ?";
  const rows = await conn.query(query, [email]);
  return rows.length > 0;
}

// create a function to get all users
async function getUsers(req, res) {
  try {
    // get all users from the database
    const users = await conn.query(
      "SELECT * FROM user_identifier INNER JOIN user_info ON user_identifier.user_id = user_info.user_id"
    );
    console.log(users);
    if (users) {
      // return the users
      return {
        status: 200,
        data: users,
      };
    } else {
      // return a message
      return res.status(404).json("No users found");
    }
  } catch (err) {
    // return an error message
    return res.status(500).json(err);
  }
}

// create a function to get a single user
async function getUserById(id) {
  try {
    // get the user
    const query =
      "SELECT * FROM user_identifier INNER JOIN user_info ON user_identifier.user_id = user_info.user_id WHERE user_identifier.user_id = ?";
    const rows = await conn.query(query, [id]);

    if (rows.length > 0) {
      // return the user
      return {
        status: 200,
        data: rows,
      };
    } else {
      // return a message
      return {
        status: 404,
        data: "User not found",
      };
    }
  } catch (err) {
    // return an error message
    return res.status(500).json(err);
  }
}

// create a function to edit a user
async function editUser(id, data) {
    try {
      const userData = data;
      let query =
        "UPDATE user_identifier INNER JOIN user_info ON user_identifier.user_id = user_info.user_id SET ";
  
      const queryParams = [];
      const updateFields = [];
  
      if (userData.user_name !== undefined && userData.user_name !== null) {
        updateFields.push("user_identifier.user_name = ?");
        queryParams.push(userData.user_name);
      }
  
      if (userData.user_first_name !== undefined && userData.user_first_name !== null) {
        updateFields.push("user_info.user_first_name = ?");
        queryParams.push(userData.user_first_name);
      }
  
      if (userData.user_last_name !== undefined && userData.user_last_name !== null) {
        updateFields.push("user_info.user_last_name = ?");
        queryParams.push(userData.user_last_name);
      }
  
      if (userData.user_phone_number !== undefined && userData.user_phone_number !== null) {
        updateFields.push("user_info.user_phone_number = ?");
        queryParams.push(userData.user_phone_number);
      }
  
      if (userData.user_rate !== undefined && userData.user_rate !== null) {
        updateFields.push("user_info.user_rate = ?");
        queryParams.push(userData.user_rate);
      }
  
      if (userData.active_user_status !== undefined && userData.active_user_status !== null) {
        updateFields.push("user_info.active_user_status = ?");
        queryParams.push(userData.active_user_status);
      }
  
      if (updateFields.length === 0) {
        // No valid fields to update
        return {
          status: 400,
          data: "No valid fields to update",
        };
      }
  
      query += updateFields.join(", ");
      query += " WHERE user_identifier.user_id = ?";
      queryParams.push(id);
  
      const user = await conn.query(query, queryParams);
  
      if (user.affectedRows > 0) {
        return {
          status: 200,
          data: "User updated successfully",
        };
      } else {
        return {
          status: 404,
          data: "User not found",
        };
      }
    } catch (err) {
      // handle the error appropriately, e.g., log it or throw it
      console.error(err);
      throw err;
    }
  }
  

//export the function
module.exports = { checkIfUsersExists, getUsers, getUserById, editUser };
