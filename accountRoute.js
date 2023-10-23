const express = require("express");

const accountRoute = express.Router();

//POST/api/v1/accounts
accountRoute.post("/", async (req, res) => {
  try {
    res.json({ msg: "Create Account route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/accounts/:id
accountRoute.get("/:id", async (req, res) => {
  try {
    res.json({ msg: "Get single Account route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/v1/accounts/:id
accountRoute.delete("/:id", async (req, res) => {
  try {
    res.json({ msg: "Delete Account route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/accounts/:id
accountRoute.put("/:id", async (req, res) => {
  try {
    res.json({ msg: "Update Account route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/accounts
accountRoute.get("/", async (req, res) => {
  try {
    res.json({ msg: "get Accounts route" });
  } catch (error) {
    res.json(error);
  }
});
module.exports = accountRoute;
