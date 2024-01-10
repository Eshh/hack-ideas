const path = require("path");
const ideasModel = require("./ideas.mongo");

async function getAllIdeas(skip, limit) {
  return await ideasModel.find({}, { _id: 0, __v: 0 }).skip(skip).limit(limit);
}

async function addNewIdea(idea) {
  //   const newIdea = Object.assign(idea, {
  //     title: "test three",
  //     description: "test",
  //     tags: ["test"],
  //     createdBy: 123,
  //     upvotes: ["test"],
  //   });
  await ideasModel.create(idea);
}
module.exports = { getAllIdeas, addNewIdea };
