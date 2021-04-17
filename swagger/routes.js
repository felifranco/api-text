const { Router } = require('express')
const swagger = require('./config')
const iecho = require('../src/controllers/iecho.controller')

const router = Router()

router.use(
  swagger.config.path,
  swagger.config.serve,
  swagger.config.setup
)

router.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    message: `El API se encuentra funcionando! Documentación completa en ${swagger.config.docu}`
  })
})

/**
 * @swagger
 * /iecho:
 *  get:
 *    summary: "Procesar texto"
 *    description: Devuelve en reverso el texto de entrada y evalúa si es un palíndrono.
 *    tags: [Texto]
 *    parameters:
 *      - in: query
 *        name: text
 *        description: Texto de entrada
 *        type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Resultado satisfactorio.
 *      400:
 *        description: Resultado con error.
 */
router.get('/iecho', iecho.palindrome)

module.exports = router
