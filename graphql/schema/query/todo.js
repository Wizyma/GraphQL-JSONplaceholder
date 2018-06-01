const { GraphQLList, GraphQLInt } = require('graphql')
const { todosType } = require('../type-defs')

module.exports = () => ({
  type: new GraphQLList(todosType),
  args: {
    id: {
      type: GraphQLInt
    },
    userId: {
      type: GraphQLInt
    }
  },
  resolve: (root, { id, userId }) => {
    if (id && userId) {
      return new Error('Please filter only id OR userId')
    }
    if(!id && !userId && !email && !name) return new Error('At least one filter must be set')
    if (id) {
      return root.todos.filter(todo => todo.id === id)
    }
    if (userId) {
      return root.todos.filter(todo => todo.userId === userId)
    }
  }
})
  