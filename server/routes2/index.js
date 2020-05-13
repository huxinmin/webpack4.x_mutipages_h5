const jsonServer = require('json-server')
const data = require('./data')
const router = jsonServer.router(data())
const rules = require('./rules')

module.exports = (path, server) => {
  server.use(path, jsonServer.rewriter(rules))
  server.use(path, router)
  router.render = (req, res) => {
    // custom output
    if (req.url.indexOf('?_page') > 0) {
      res.json({
        total: 40,
        content: res.locals.data
      })
    } else {
      res.json(res.locals.data)
    }
  }
}
