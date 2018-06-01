const expressGraphql = require('express-graphql');
const CORS = require('micro-cors')()
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const schema = require('./graphql')
const data = require('./data.json')

module.exports = CORS(expressGraphql({
  schema,
  graphiql: process.env.GRAPHIQL,
  rootValue: data,
  context: {
    data,
  }
}))