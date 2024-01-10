const path = require("path");
const ideasModel = require("./ideas.mongo");

INITIAL_HACK_ID = 0;

async function getAllIdeas(skip, limit, id = "") {
  console.log(id, "heyyyyyyyy");
  let data = await ideasModel
    .find({}, { _id: 0, __v: 0 })
    .skip(skip)
    .limit(limit);
  console.log(data);
  if (id == "all") {
    return data;
  } else {
    return data.filter((e) => +e.createdBy == +id);
  }
}

async function addNewIdea(idea) {
    idea["hackId"] = idea.hackId || INITIAL_HACK_ID;
  await ideasModel.findOneAndUpdate(
    {
      hackId: idea.hackId + 1,
    },
    idea,
    { upsert: true }
  );
}

async function saveVote(idea) {
    await ideasModel.findOneAndUpdate(
    {
      hackId: idea.hackId,
    },
    idea,
    { upsert: true }
  );

}

module.exports = { saveVote, addNewIdea, getAllIdeas };
