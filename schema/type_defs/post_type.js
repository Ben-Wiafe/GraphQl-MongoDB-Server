const graphql = require("graphql")

const PostType = new graphql.GraphQLObjectType({
    name: "PostType",
    fields: () => ({
        id: { type: graphql.GraphQLString },
        comments: { type: graphql.GraphQLString },
        likes: { type: graphql.GraphQLString },
        text: { type: graphql.GraphQLString },
        banner: { type: graphql.GraphQLString },
        authorID: { type: graphql.GraphQLString },
        createdAt: { type: graphql.GraphQLString },

    })
})

module.exports = PostType;