const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const photosType = new GraphQLObjectType({
  name: 'Photos',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    albumId: {
      type: GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    url: {
      type: GraphQLNonNull(GraphQLString),
    },
    thumbnailUrl: {
      type: GraphQLNonNull(GraphQLString),
    },
  })
})

module.exports = {
  photosType
}