const { ApolloServer, gql } = require("apollo-server");
const schema = require("./schema/schema");
const authors = require("./schema/Author Model.json");
const books = require("./schema/Book Model.json");
const lodash = require("lodash");

const port = 3000;
 /////////////////////////

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://azaygenius:Password@blog.prlnz.mongodb.net/blogDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected..");
  })
  .catch((error) => console.log(error));

var BlogSchema = new mongoose.Schema({
  id: {
    type:  String
  },
  comments: {
    type: String,
  },
  likes: {
    type: Number,
  },
  text: {
    type: String,
  },
  banner: {
    type: String
  },
  authorID: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = new mongoose.model("Blog", BlogSchema);

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
