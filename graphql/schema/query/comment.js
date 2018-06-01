const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql')
const { commentsType } = require('../type-defs')
const R = require('ramda');

module.exports = () => ({
  type: new GraphQLList(commentsType),
  args: {
    id: {
      type: GraphQLInt,
    },
    postId: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    }
  },
  resolve: (root, { id, postId, name, email }) => {
    if (id && postId) return new Error('Please filter only id OR postId')
    if(!id && !postId && !email && !name) return new Error('At least one filter must be set')

    const test = n => n.id === id || n.postId === postId || n.name.includes(name) || n.email.includes(email)
    return R.filter(test)(root.comments)
  }
})
  