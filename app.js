const { ApolloServer, gql } = require("apollo-server");
const schema = require("./schema/schema");
const authors = require("./schema/Author Model.json");
const books = require("./schema/Book Model.json");
const lodash = require("lodash");

const port = 4000;

// const typeDefs = gql`
//   type Book {
//     id: String!
//     title: String!
//     genre: String!
//     pages: Int!
//   }

//   type Query {
//     book(id: String): Book
//     books: [Book]
//   }

//   # type Mutation {

//   # }
// `

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

const app = express();

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("Server running on port 4000");
});
