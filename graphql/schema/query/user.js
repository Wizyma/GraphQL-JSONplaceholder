const { GraphQLList } = require('graphql')
const { userType } = require('../type-defs')

module.exports = () => ({
  type: new GraphQLList(userType),
  resolve: root => root.users || console.log(root)
})
  