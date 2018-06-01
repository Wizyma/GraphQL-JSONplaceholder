const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const postsType = new GraphQLObjectType({
  name: 'Posts',
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
    body: {
      type: GraphQLNonNull(GraphQLString),
    },
  })
})

module.exports = {
  postsType
}