const { getAllIdeas } = require("../../models/ideas.model");

async function httpGetAllIdeas(req, res) {
  return res.status(200).json(await getAllIdeas());
}

module.exports = { httpGetAllIdeas };
