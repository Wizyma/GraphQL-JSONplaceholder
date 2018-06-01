const { GraphQLObjectType } = require('graphql')
const usersQuery = require('./users')
const userQuery = require('./user')
const todosQuery = require('./todos')
const todoQuery = require('./todo')
const commentsQuery = require('./comments')
const commentQuery = require('./comment')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: usersQuery(),
    user: userQuery(),
    todos: todosQuery(),
    todo: todoQuery(),
    comments: commentsQuery(),
    comment: commentQuery(),
  }
})

module.exports = RootQuery