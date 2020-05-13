const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
// routes
const routes1 = require('./routes1')
const routes2 = require('./routes2')

server.use(middlewares)
server.use(jsonServer.bodyParser)

// use routes here
//http://127.0.0.1:9000/routes1/routes1Data?pageNo=1&pageSize=2
//http://127.0.0.1:9000/routes2/routes2Data?pageNo=1&pageSize=2
routes1('/routes1', server)
routes2('/routes2', server)

server.listen(9000, () => {
  console.log('JSON Server is running at 9000')
})
