const express = require("express");

const transactionsRoute = express.Router();

//POST/api/v1/transactions
transactionsRoute.post("/", async (req, res) => {
  try {
    res.json({ msg: "create transactions route" });
  } catch (error) {
    res.json(error);
  }
});
//GET/api/v1/transactions
transactionsRoute.get("/", async (req, res) => {
  try {
    res.json({ msg: "All transactions" });
  } catch (error) {
    res.json(error);
  }
});
//GET/api/v1/transactions/:id
transactionsRoute.get("/:id", async (req, res) => {
  try {
    res.json({ msg: "single  route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/v1/transactions/:id
transactionsRoute.delete("/:id", async (req, res) => {
  try {
    res.json({ msg: "delete transactions route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/transactions/:id
transactionsRoute.put("/:id", async (req, res) => {
  try {
    res.json({ msg: "Update transactions route" });
  } catch (error) {
    res.json(error);
  }
});
module.exports = transactionsRoute;
