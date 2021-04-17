const express = require('express')

const cfg = require('./cfg')

const port = cfg.port

const routes = require('./swagger/routes.js')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use(routes)

app.listen(port)

console.log(`El API se encuentra ejecutando. La documentación completa se encuentra en ${cfg.protocol}://${cfg.host}:${cfg.port}${cfg.routeApiDocs}`)

module.exports = app
