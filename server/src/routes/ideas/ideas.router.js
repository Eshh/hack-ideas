const express = require("express");

const ideasRouter = express.Router();

// controllers
const {
  httpGetAllIdeas,
  httpAddNewIdea,
  httpUpdateIdea,
} = require("./ideas.controller");

ideasRouter.get("/", httpGetAllIdeas);
ideasRouter.post("/", httpAddNewIdea);
ideasRouter.post("/upvote", httpUpdateIdea);

module.exports = ideasRouter;
