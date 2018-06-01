const { GraphQLObjectType } = require('graphql')
const usersQuery = require('./users')
const userQuery = require('./user')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: usersQuery(),
    user: userQuery(),
  }
})

module.exports = RootQuery