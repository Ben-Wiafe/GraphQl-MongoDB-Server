const { ApolloServer, gql } = require("apollo-server");
const schema = require("./schema/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://azaygenius:Password@blog.prlnz.mongodb.net/Blogdb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected..");
  })
  .catch((error) => console.log(error));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");

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

  const port = 3000;

  app.listen(port, () => {
    console.log("Server running on port 3000");
  });
});
