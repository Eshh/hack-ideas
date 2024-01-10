const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, required: true },
  createdBy: { type: Number, required: true },
  createdAt: { type: Number, required: true },
  upvotes: { type: Array },
  hackId: { type: Number, required: true },
});

module.exports = mongoose.model("Idea", ideaSchema);
