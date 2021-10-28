const graphql = require("graphql");
const lodash = require("lodash");
const authors = require("./Author Model.json");
const books = require("./Book Model.json");
const bookType = require("./type_defs/book_type");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: bookType,
      args: { id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) } },
      resolve(parent, args) {
        return lodash.find(books, { id: args.id });
      },
    },
    books: {
      type: new graphql.GraphQLList(bookType),
      resolve: (parent, args) => books,
    },
  },
});

module.exports = RootQuery;
