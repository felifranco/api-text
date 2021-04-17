require('dotenv').config()

module.exports = {
  protocol: process.env.PROTOCOL,
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  routeApiDocs: process.env.ROUTE_API_DOCS
}
