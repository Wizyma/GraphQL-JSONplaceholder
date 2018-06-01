const Server = require('./config')

const app = new Server({ port: 3000 })
app.run()
