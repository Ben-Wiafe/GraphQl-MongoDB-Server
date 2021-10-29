const graphql = require("graphql");
const postType = require("./type_defs/post_type");
const commentType = require("./type_defs/comment_type");
const authorType = require("./type_defs/author_type");
const BlogModel = require("../schema/models/blog_model");
const CommentModel = require("../schema/models/comment_model");
const AuthorModel = require("../schema/models/author_model");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    post: {
      type: postType,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
      async resolve(parent, args) {
        var doc = await BlogModel.findById(args._id);
        console.log(doc);
        return doc;
      },
    },

    posts: {
      type: new graphql.GraphQLList(postType),
      resolve(parent, args) {
        var docs = BlogModel.find();
        return docs;
      },
    },

    comment: {
      type: commentType,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
      },
      resolve(parent, args) {
        // find comment where id === args.id
        return true;
      },
    },

    comments: {
      type: new graphql.GraphQLList(commentType),
      resolve(parent, args) {
        var docs = CommentModel.find();
        return docs;
      },
    },

    author: {
      type: authorType,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
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
