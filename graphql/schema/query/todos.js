const { GraphQLList } = require('graphql')
const { todosType } = require('../type-defs')

module.exports = () => ({
  type: new GraphQLList(todosType),
  resolve: root => root.todos
})
  