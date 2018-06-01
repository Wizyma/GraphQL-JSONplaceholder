const express = require('express');
const expressGraphql = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const schema = require('../graphql');
const data = require('../data.json');

class Server {
  constructor({ port }) {
    this.port = port || 4000

    this.app = express()
    this.config()
  }

  config() {
    this.app.use('*', cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use('/api', expressGraphql({
      schema,
      graphiql: process.env.GRAPHIQL,
      rootValue: data
    }))
  }

  run() {
    this.app.listen(this.port, () => {
      console.log(`>>>> Server stated port : ${this.port}`)
    })
  }
}

module.exports = Server;