const graphql = require("graphql");
const PostType = require("./type_defs/post_type");
const uuid = require("uuid");
const Blog = require("./blog_model");

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
        var today = new Date().toUTCString();
        let data = args;

        data.createdAt = today;
        data._id = postID;
        data.likes = 0;
        data.comments = 0;
        
        blog.save(function (err, blogg) {
          if (err) return console.error(err);
          console.log("Saved to blogs collection");
        });
      },
    },
  },
});

module.exports = Mutation;
