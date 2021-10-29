const graphql = require("graphql");
const PostType = require("./type_defs/post_type");
const CommentType = require("./type_defs/comment_type");
const uuid = require("uuid");
const posts = require("../posts");

const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    create_blog: {
      type: PostType,
      args: {
        text: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        banner: { type: graphql.GraphQLString },
        authorID: { type: graphql.GraphQLString },
      },
      resolve(parent, args) {
        var postID = uuid.v4();
        var today = new Date();
        let data = args;

        data.createdAt = String(today);
        data.id = postID;
        data.likes = 0;
        data.comments = 0;

        posts.push(data);

        // Write code here to insert the "data" object into database
      },
    },
  },
});

module.exports = Mutation;
