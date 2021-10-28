const graphql = require("graphql");
const books = require("./mock_data");
const BookType = require("./type_defs/book_type");

const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    add_book: {
      type: BookType,
      args: {
        title: { type: graphql.GraphQLString },
        genre: { type: graphql.GraphQLString },
        isbn: { type: graphql.GraphQLString },
        pages: { type: graphql.GraphQLString },
      },
      resolve(parent, args) {
        books.push({
          id: graphql.GraphQLID,
          title: args.title,
          genre: args.genre,
          isbn: args.isbn,
          pages: args.pages,
        });
        return args.id;
      },
    },

    update_book: {
      type: BookType,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        title: { type: graphql.GraphQLString },
        genre: { type: graphql.GraphQLString },
      },
      resolve(parent, args) {
        //
      },
    },
  },
});

module.exports = Mutation;
