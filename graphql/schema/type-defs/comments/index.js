const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const commentsType = new GraphQLObjectType({
  name: 'Comments',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    postId: {
      type: GraphQLNonNull(GraphQLInt)
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    body: {
      type: GraphQLNonNull(GraphQLString),
    },
  })
})

module.exports = {
  commentsType
}