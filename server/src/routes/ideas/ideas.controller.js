const { getAllIdeas, addNewIdea } = require("../../models/ideas.model");
const { getPagination } = require("../../services/query");

async function httpGetAllIdeas(req, res) {
  const { skip, limit } = getPagination(req.query);
  return res.status(200).json(await getAllIdeas(skip, limit));
}

async function httpAddNewIdea(req, res) {
  const idea = req.body;
  // validation
  if (
    !idea.title ||
    !idea.description ||
    !idea.tags ||
    !idea.createdBy ||
    !idea.upvotes
  ) {
    return res
      .status(400)
      .json({ error: "Missing required Launch properties" });
  }

  await addNewIdea(idea);
  return res.status(201).json(idea);
}

module.exports = { httpGetAllIdeas, httpAddNewIdea };
