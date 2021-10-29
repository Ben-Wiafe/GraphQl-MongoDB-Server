const graphql = require("graphql")

const AuthorType = new graphql.GraphQLObjectType({
    name: "AuthorType",
    fields: () => ({
        id: { type: graphql.GraphQLString },
        bio: { type: graphql.GraphQLString },
        username: { type: graphql.GraphQLString },
    })
})

module.exports = AuthorType;