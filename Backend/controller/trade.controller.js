const express = require("express");
// import trade service
const tradeService = require("../services/trade.service");

// create a function to insert a trade data
async function insertTrade(req, res) {
  try {
    // get the trade data from the request
    const data = req.body;
    // console.log(data);
    // insert the trade
    const trade = await tradeService.insertTrade(data);
    // return the trade
    return res.status(trade.status).json(trade);
  } catch (err) {
    // return an error message
    return res.status(500).json(err);
  }
}

// create a function to post a trade image
async function postTradeImage(req, res) {
    try {
        // get the trade id
        const id = req.params.id;
        // get the image
        const image = req.file;
        // post the trade image
        const trade = await tradeService.postTradeImage(id, image);
        // return the trade
        return res.status(trade.status).json(trade);
    } catch (err) {
        // return an error message
        return res.status(500).json(err);
    }
}

// create a function to get all trades
async function getTrades(req, res) {
  try {
    // get all trades from the database
    const trades = await tradeService.getTrades();
    // console.log(trades);
    if (trades) {
      // return the trades
      return res.status(trades.status).json(trades);
    } else {
      // return a message
      return res.status(404).json("No trades found");
    }
  } catch (err) {
    // return an error message
    return res.status(500).json(err);
  }
}

// create a function to get a single trade
async function getTradeById(req, res) {
  try {
    // get the trade id
    const id = req.params.id;
    // get the trade
    const trade = await tradeService.getTradeById(id);
    // return the trade
    return res.status(trade.status).json(trade);
  } catch (err) {
    // return an error message
    return res.status(500).json(err);
  }
}

// create a function to edit a trade
async function editTrade(req, res) {
  try {
    // get the trade id
    const id = req.params.id;
    // get the trade data
    const data = req.body;
    // edit the trade
    const trade = await tradeService.editTrade(id, data);
    // return the trade
    return res.status(trade.status).json(trade);
  } catch (err) {
    // return an error message
    return res.status(500).json(err);
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
