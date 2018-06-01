const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql')

const { adressType } = require('../adress')
const { postsType } = require('../posts')
const { albumsType } = require('../albums')
const { todosType } = require('../todos')

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
    },
    albums: {
      type: new GraphQLList(albumsType),
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
          return data.albums.filter(album => root.id === album.userId).filter(album => album.id === id)
        }
        if (!id && title) {
          return data.albums.filter(album => root.id === album.userId).filter(album => album.title.includes(title))
        }
        return data.albums.filter(album => root.id === album.userId)
      }
    },
    todos: {
      type: new GraphQLList(todosType),
      args: {
        id: {
          type: GraphQLInt,
        },
        title: {
          type: GraphQLString,
        },
        completed: {
          type: GraphQLBoolean,
        }
      },
      resolve: (root, { id, title, completed }, { data }) => {
        if (id) {
          return data.todos.filter(todo => root.id === todo.userId).filter(todo => todo.id === id)
        }
        if (!id && title) {
          return data.todos.filter(todo => root.id === todo.userId).filter(todo => todo.title.includes(title))
        }
        if (!id && !title && completed) {
          return data.todos.filter(todo => root.id === todo.userId).filter(todo => todo.completed === completed)
        }
        return data.todos.filter(todo => root.id === todo.userId)
      }
    }
  })
})

module.exports = {
  userType,
}
