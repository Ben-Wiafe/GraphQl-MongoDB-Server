const graphql = require("graphql");

const CommentType = new graphql.GraphQLObjectType({
  name: "CommentType",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    text: { type: graphql.GraphQLString },
    postID: { type: graphql.GraphQLString },
    authorID: { type: graphql.GraphQLString },
    createdAt: { type: graphql.GraphQLString },
  }),
});

module.exports = CommentType;
