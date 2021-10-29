const graphql = require("graphql");
const postType = require("./type_defs/post_type");
const commentType = require("./type_defs/comment_type");
const authorType = require("./type_defs/author_type");
const posts = require("../posts");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    post: {
      type: postType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      resolve(parent, args) {
        // find post where id === args.id
        return true;
      },
    },

    posts: {
      type: new graphql.GraphQLList(postType),
      resolve(parent, args) {
        return posts;
      },
    },

    comment: {
      type: commentType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      resolve(parent, args) {
        // find comment where id === args.id
        return true;
      },
    },

    comments: {
      type: new graphql.GraphQLList(commentType),
      resolve(parent, args) {
        return true;
      },
    },

    author: {
      type: authorType,
      args: {
        id: { type: graphql.GraphQLString },
        username: { type: graphql.GraphQLString },
      },
      resolve(parent, args) {
        // find author where id === args.id or username === args.username
        return true;
      },
    },
  },
});

module.exports = RootQuery;
