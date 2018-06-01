const { GraphQLList } = require('graphql')
const { commentsType } = require('../type-defs')

module.exports = () => ({
  type: new GraphQLList(commentsType),
  resolve: (root, { id, userId }) => root.comments
})
  