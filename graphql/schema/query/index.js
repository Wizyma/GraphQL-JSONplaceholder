const { GraphQLObjectType } = require('graphql')
const usersQuery = require('./user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: usersQuery()
  }
})

module.exports = RootQuery