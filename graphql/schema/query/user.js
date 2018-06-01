const { GraphQLList, GraphQLNonNull, GraphQLInt } = require('graphql')
const { userType } = require('../type-defs')

module.exports = () => ({
  type: userType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: (root, { id }) => root.users.filter(user => user.id === id)[0]
})
  