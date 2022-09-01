const express = require("express");
const Router = express.Router();
// controllers
const { searchController } = require("../controllers");

Router.get("/", searchController);

module.exports = Router;
