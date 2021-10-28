const graphql = require("graphql");
const rootQuery = require("./query");
const mutation = require("./mutation");

const schema = new graphql.GraphQLSchema({
  query: rootQuery,
  mutation: mutation,
});

module.exports = schema;
