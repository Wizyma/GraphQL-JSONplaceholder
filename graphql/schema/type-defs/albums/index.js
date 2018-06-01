const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql')

const { photosType } = require('../photos');

const albumsType = new GraphQLObjectType({
  name: 'Albums',
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
    photos: {
      type: new GraphQLList(photosType),
      args: {
        id: {
          type: GraphQLInt
        },
        title: {
          type: GraphQLString
        },
      },
      resolve: (root, { id, title }, { data }) => {
        if (id) {
          return data.photos.filter(photo => root.id === photo.albumId).filter(photo => photo.id === id)
        }
        if (!id && title) {
          return data.photos.filter(photo => root.id === photo.albumId).filter(photo => photo.title.includes(title))
        }
        return data.photos.filter(photo => root.id === photo.albumId)
      }
    }
  })
})

module.exports = {
  albumsType
}