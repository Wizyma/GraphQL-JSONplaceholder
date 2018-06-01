const { GraphQLSchema } = require('graphql')
const { RootQuery } = require('./schema')

module.exports = new GraphQLSchema({
  query: RootQuery,
})