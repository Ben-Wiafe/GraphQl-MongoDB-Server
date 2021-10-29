const graphql = require("graphql");

const BlogPost = new graphql.GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    likes: { type: graphql.GraphQLString },
    comment: { type: graphql.GraphQLString },
    author: { type: graphql.GraphQLString },
  }),
  name: "Book",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    pages: { type: graphql.GraphQLString },
    genre: { type: graphql.GraphQLString },
    isbn: { type: graphql.GraphQLString },
  }),
});



module.exports = BlogPost;
