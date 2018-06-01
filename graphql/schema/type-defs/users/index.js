const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql')

const { adressType } = require('../adress')
const { postsType } = require('../posts')

const companyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    catchPhrase: {
      type: GraphQLNonNull(GraphQLString),
    },
    bs: {
      type: GraphQLNonNull(GraphQLString),
    },
  })
})

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLNonNull(adressType),
    },
    phone: {
      type: GraphQLNonNull(GraphQLString),
    },
    website: {
      type: GraphQLNonNull(GraphQLString),
    },
    company: {
      type: GraphQLNonNull(companyType),
    },
    posts: {
      type: new GraphQLList(postsType),
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
          return data.posts.filter(post => root.id === post.userId).filter(post => post.id === id)
        }
        if (!id && title) {
          return data.posts.filter(post => root.id === post.userId).filter(post => post.title.includes(title))
        }
        return data.posts.filter(post => root.id === post.userId)
      }
    }
  })
})

module.exports = {
  userType,
}
