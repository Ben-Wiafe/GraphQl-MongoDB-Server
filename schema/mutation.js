const graphql = require("graphql");
<<<<<<< HEAD
const BookType = require("./type_defs/book_type");
=======
const PostType = require("./type_defs/post_type");
const CommentType = require("./type_defs/comment_type");
const uuid = require("uuid");
const posts = require("../posts");
>>>>>>> a469b9c5252b7a53d088f8bada3771a5cfd652d6

const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
<<<<<<< HEAD
    add_book: {   
      type: BookType,
      args: { 
        title: { type: graphql.GraphQLString },
        genre: { type: graphql.GraphQLString },
        isbn: { type: graphql.GraphQLString },
        pages: { type: graphql.GraphQLString },
=======
    create_blog: {
      type: PostType,
      args: {
        text: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        banner: { type: graphql.GraphQLString },
        authorID: { type: graphql.GraphQLString },
>>>>>>> a469b9c5252b7a53d088f8bada3771a5cfd652d6
      },
      resolve(parent, args) {
        var postID = uuid.v4();
        var today = new Date().toUTCString();
        let data = args;

        data.createdAt = today;
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
