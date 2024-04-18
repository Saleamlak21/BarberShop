//import the database connection
const conn = require("../config/db.config");


// Create the functions if the customer exists and to create the customer
async function checkIfUsersExists(email) {
    console.log(email)
  const query = "SELECT * FROM user_identifier WHERE user_email = ?";
  const rows = await conn.query(query, [email]);
  return rows.length > 0;
}

//export the function
module.exports = { checkIfUsersExists };