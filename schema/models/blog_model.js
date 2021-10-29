var mongoose = require("mongoose");

var BlogSchema = mongoose.Schema({
  _id: {
    type: String,
    required: false,
  },
  comments: {
    type: Number,
    required: false,
  },
  likes: {
    type: Number,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  banner: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    required: false,
  },
});

const BlogModel = new mongoose.model("Blogg", BlogSchema, "blogs");

module.exports = BlogModel;
