const { ApolloServer, gql } = require("apollo-server");

const schema = require("./schema/schema");
const authors = require("./schema/Author Model.json");
const books = require("./schema/Book Model.json");
const lodash = require("lodash");

const port = 4000;

// const typeDefs = gql`
//   type Book {
//     id: String!
//     name: String!
//     genre: String!
//     pages: Int!
//     author:
//   }

//   type Query {
//     book(id: String): Book
//     books: [Book]
//   }

//   # type Mutation {
//   #   add_book
//   # }
// `;

// const resolvers = {
//   Query: {
//     books: () => books,
//     book: (parent, args) => lodash.find(books, { id: args.id }),
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// server
//   .listen(port)
//   .then(({ parent, args }) => {
//     console.log(`Server running at ${port}`);
//   })
//   .catch((error) => console.log(error));

////////////////////// Using Express GraphQL /////////////////////////

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testData')
.then(()=>{
  console.log("Connected..");
})
.catch(error => handleError(error));

  var Schema = mongoose.Schema;

   var book = new Schema({
     title:  String,
     author: String,
      pages: Number,
      isbn: String,
      genre: String
   }); 
       module.exports = mongoose.model('collectionname=', book);

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log("Server running on port 4000");
});
