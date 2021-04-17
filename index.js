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

console.log(`API se ejecuta en el puerto ${port}`)

module.exports = app
