const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql')

const todosType = new GraphQLObjectType({
  name: 'Todos',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    userId: {
      type: GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    completed: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
  })
})

module.exports = {
  todosType
}