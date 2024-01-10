const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  keplerName: { type: String, required: true },
});

module.exports = mongoose.model("Idea", ideaSchema);
