var mongoose = require("mongoose");

var AuthorSchema = mongoose.Schema({
  _id: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
});

const AuthorModel = new mongoose.model("authors", AuthorSchema);

module.exports = AuthorModel;
