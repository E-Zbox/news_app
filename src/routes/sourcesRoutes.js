const express = require("express");
// controller
const { sourcesController } = require("../controllers");

const Router = express.Router();

Router.get("/", sourcesController);

module.exports = Router;
