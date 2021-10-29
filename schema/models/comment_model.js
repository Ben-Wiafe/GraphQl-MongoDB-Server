var mongoose = require("mongoose");

var CommentSchema = mongoose.Schema({
  _id: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  authorID: {
    type: String,
    required: false,
  },
  postID: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    required: false,
  },
});

const CommentModel = new mongoose.model("comments", CommentSchema);

module.exports = CommentModel;
