const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql')

const { commentsType } = require('../comments');

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
    comments: {
      type: new GraphQLList(commentsType),
      args: {
        id: {
          type: GraphQLInt
        },
        name: {
          type: GraphQLString
        },
        email: {
          type: GraphQLString
        },
      },
      resolve: (root, { id, email, name }, { data }) => {
        if (id) {
          return data.comments.filter(comment => root.id === comment.postId).filter(comment => comment.id === id)
        }
        if (!id && name && email) {
          return data.comments.filter(comment => root.id === comment.postId).filter(comment => (comment.email.includes(email) && comment.name.includes(name)))
        }
        if (!id && name) {
          return data.comments.filter(comment => root.id === comment.postId).filter(comment => comment.name.includes(name))
        }
        if (!id && email) {
          return data.comments.filter(comment => root.id === comment.postId).filter(comment => comment.email.includes(email))
        }
        return data.comments.filter(comment => root.id === comment.postId)
      }
    }
  })
})

module.exports = {
  postsType
}