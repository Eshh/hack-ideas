const { getAllIdeas, addNewIdea, saveVote } = require("../../models/ideas.model");
const { getPagination } = require("../../services/query");

async function httpGetAllIdeas(req, res) {
  const { skip, limit } = getPagination(req.query);
  return res.status(200).json(await getAllIdeas(skip, limit, req.query.empID));
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
    return res.status(400).json({ error: "Missing required properties" });
  }

  await addNewIdea(idea);
  return res.status(201).json(idea);
}

async function httpUpdateIdea(req,res){
  await saveVote(req.body)
  return res.status(201).json(req.body);

}

module.exports = { httpGetAllIdeas, httpAddNewIdea, httpUpdateIdea };
