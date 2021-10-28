const graphql = require("graphql");

const BookType = new graphql.GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    pages: { type: graphql.GraphQLString },
    genre: { type: graphql.GraphQLString },
    isbn: { type: graphql.GraphQLString },
  }),
});



module.exports = BookType;
