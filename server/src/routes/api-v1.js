const express = require("express");
const ideasRouter = require("./ideas/ideas.router");
const api = express.Router();


api.use("/ideas", ideasRouter);

module.exports = api;
