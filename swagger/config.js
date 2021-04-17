const cfg = require('../cfg')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  swaggerDefinition: {
    info: {
      title: 'Documentación del API',
      version: '1.0.0',
      description: 'Este es un API sencillo hecho con Express y documentado con Swagger',
      contact: {
        name: 'Feliciano Franco',
        email: 'f64franco@gmail.com'
      }
    },
    host: `${cfg.host}:${cfg.port}`,
    schemes: [cfg.protocol]
  },
  apis: ['./swagger/routes.js']
}

const specs = swaggerJsdoc(options)

exports.config = {
  docu: `${cfg.protocol}://${cfg.host}:${cfg.port}${cfg.routeApiDocs}`,
  path: cfg.routeApiDocs,
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs)
}
