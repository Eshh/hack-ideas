const express = require("express");

const ideasRouter = express.Router();

// controllers
const { httpGetAllIdeas,httpAddNewIdea } = require("./ideas.controller");

ideasRouter.get("/", httpGetAllIdeas);
ideasRouter.post("/", httpAddNewIdea);
ideasRouter.post("/upvote", httpAddNewIdea);

module.exports = ideasRouter;
