//import the database connection
const conn = require("../config/db.config");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// create a function to insert a trade
async function insertTrade(data) {
  try {
    console.log(data);
    // Query to insert the trade into the database
    // create  a function to get date and time
    const date = new Date();
    data.date = date;

    const query =
      "INSERT INTO general_info ( date, pair, session, trade_side, fill_price) VALUES (?,?,?,?,?)";
    // Execute the query and store the result in
    const rows = await conn.query(query, [
      data.date,
      data.pair,
      data.session,
      data.trade_side,
      data.fill_price,
    ]);

    // get  the general_info_id
    const general_info_id = rows.insertId;

    const query2 =
      "INSERT INTO trade (general_info_id, current_balance, rrr, entry_reason) VALUES (?,?,?,?)";
    const rows2 = await conn.query(query2, [
      general_info_id,
      data.current_balance,
      data.rrr,
      data.entry_reason,
    ]);

    const query3 =
      "INSERT INTO trade_result (general_info_id, balance_after_trade,profit_loss, comments, win_or_loss, why_exited) VALUES (?,?,?,?,?,?)";
    const rows3 = await conn.query(query3, [
      general_info_id,
      data.balance_after_trade || null,
      data.profit_loss || null,
      data.comments || null,
      data.win_or_loss || null,
      data.why_exited || null,
    ]);

    const query4 =
      "INSERT INTO trade_images (general_info_id, image_one, image_two, image_three) VALUES (?,?,?,?)";
    const rows4 = await conn.query(query4, [
      general_info_id,
      data.image_one || null,
      data.image_two || null,
      data.image_three || null,
    ]);

    // Return the inserted trade
    if (rows4.affectedRows > 0) {
      return {
        status: 200,
        newTrade: data,
      };
    } else {
      return {
        status: 400,
        error: "Failed to insert the trade!",
      };
    }
  } catch (err) {
    // Return an error message if an error occurs
    return {
      status: 500,
      error: err,
    };
  }
}

// create a function to post a trade image
async function postTradeImage(id, image) {
  try {
    console.log(image);
    const id = 1;
    // Query to insert the trade image into the database
    const query =
      "INSERT INTO trade_images (general_info_id, image) VALUES (?,?)";
    // Execute the query and store the result in
    const rows = await conn.query(query, [id, image.filename]);
    // Return the inserted trade image
    if (rows.affectedRows > 0) {
      return {
        status: 200,
        newTradeImage: image,
      };
    } else {
      return {
        status: 400,
        error: "Failed to insert the trade image!",
      };
    }
  } catch (err) {
    // Return an error message if an error occurs
    return {
      status: 500,
      error: err,
    };
  }
}

// create a function to get all users
async function getTrades(req, res) {
  try {
    const [trades] = await conn.query(
      `SELECT 
                general_info.*, 
                trade.*, 
                trade_result.*, 
                GROUP_CONCAT(trade_images.image) AS images
            FROM 
                general_info
            INNER JOIN 
                trade ON general_info.general_info_id = trade.general_info_id
            INNER JOIN 
                trade_result ON general_info.general_info_id = trade_result.general_info_id
            LEFT JOIN 
                trade_images ON general_info.general_info_id = trade_images.general_info_id
            GROUP BY 
                general_info.general_info_id, trade.trade_id, trade_result.trade_result_id`
    );

  
   
    // Ensure trades is an array, wrap in an array if it's an object
    const tradeArray = Array.isArray(trades) ? trades : [trades];

    // Convert images string into an array for each trade
    tradeArray.forEach(trade => {
      // Split images string into an array; if images is null, set it to an empty array
      trade.images = trade.images ? trade.images.split(',') : []; // Convert to array or set to empty array

      // Clean each image filename by removing quotes and trimming whitespace
      trade.images = trade.images.map(image => image.replace(/"/g, "").trim());
    });

    console.log(trades, "trades");
   console.log(trades.images, "images");

   

    // Return the trades
    return{
        status: 200,
        data: trades,
    }
 
  } catch (error) {
    console.error("Error fetching trades:", error);
    // Handle the error appropriately
  }
}

// create a function to get a single trade
async function getTradeById(id) {
  try {
    // get the trade
    const query =
      "SELECT * FROM general_info INNER JOIN trade ON general_info.general_info_id = trade.general_info_id INNER JOIN trade_result ON general_info.general_info_id = trade_result.general_info_id INNER JOIN trade_images ON general_info.general_info_id = trade_images.general_info_id WHERE general_info.general_info_id = ?";
    const rows = await conn.query(query, [id]);

    if (rows.length > 0) {
      // return the trade
      return {
        status: 200,
        data: rows,
      };
    } else {
      // return a message
      return {
        status: 404,
        data: "Trade not found",
      };
    }
  } catch (err) {
    // return an error message
    return res.status(500).json(err);
  }
}

// create a function to edit a trade
async function editTrade(id, data) {
  try {
    console.log(data, id);
    // Query to update the trade
    const query =
      "UPDATE trade_result SET balance_after_trade = ?, profit_loss = ?, comments = ?, win_or_loss = ?, why_exited = ? WHERE general_info_id = ?";
    // Execute the query
    const rows = await conn.query(query, [
      data.balance_after_trade,
      data.profit_loss,
      data.comments,
      data.win_or_loss,
      data.why_exited,
      id,
    ]);
    // create a function to upload images to the database using multer

    const query2 =
      "UPDATE trade_images SET image_one = ?, image_two = ?, image_three = ? WHERE general_info_id = ?";
    // Execute the query
    const rows2 = await conn.query(query2, [
      data.image_one,
      data.image_two,
      data.image_three,
      id,
    ]);

    // Return the updated trade
    if (rows.affectedRows > 0) {
      return {
        status: 200,
        updatedTrade: data,
      };
    } else if (rows2.affectedRows > 0) {
      return {
        status: 200,
        updatedTrade: data,
      };
    } else {
      return {
        status: 400,
        error: "Failed to update the trade!",
      };
    }
  } catch (err) {
    // Return an error message if an error occurs
    return {
      status: 500,
      error: err,
    };
  }
}

// export the functions
module.exports = {
  insertTrade,
  getTrades,
  getTradeById,
  editTrade,
  postTradeImage,
};
