const express = require("express");
// controller
const { latestController } = require("../controllers");

const Router = express.Router();

Router.get("/", latestController);

module.exports = Router;
