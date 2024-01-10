const express = require("express");

const ideasRouter = express.Router();

// controllers
const { httpGetAllIdeas } = require("./ideas.controller");

ideasRouter.get("/", httpGetAllIdeas);

module.exports = ideasRouter;
