// import express
const express = require('express');
// import router
const router = express.Router();
// import the trade controller
const tradeController = require("../controller/trade.controller");

// import multer
const multer = require('multer');
const path = require('path');

// create a storage object with a destination and filename
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Ensure the destination directory exists and is correct
        cb(null, path.join(__dirname, '../public/Images'));
    },
    filename: function (req, file, cb) {
        // Use a unique filename based on the current timestamp and original name
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
// create an upload object
const upload = multer({ storage: storage })

// define a route to create a trade
router.post("/api/create-trade",tradeController.insertTrade);
// define a route to get all trades
router.get("/api/get-trades",tradeController.getTrades);
// define a route to get a single trade
router.get("/api/get-trade/:id",tradeController.getTradeById);
// define the route to edit a trade
router.put("/api/edit-trade/:id",tradeController.editTrade);
// /api/post-trade-image
router.post("/api/post-trade-image",upload.single('uploaded_file'),tradeController.postTradeImage);



// export the router
module.exports = router;