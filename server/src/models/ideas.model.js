const path = require("path");
const ideasModel = require("./ideas.mongo");

async function getAllIdeas(skip, limit,id='') {
  console.log(id,'heyyyyyyyy')
  let data = await ideasModel.find({}, { _id: 0, __v: 0 }).skip(skip).limit(limit);
  console.log(data)
  if(id=='all'){
    return data
  }
  else{
    return data.filter(e=>+e.createdBy == +id)
  }
}

async function addNewIdea(idea) {
  await ideasModel.create(idea);
}
module.exports = { getAllIdeas, addNewIdea };
