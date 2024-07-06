const mongoose = require("mongoose");
const articleSchema = new Schema({
  id: String,
  title: String,
  content: String,
  tags: [String],
  publishedDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Article", articleSchema);
