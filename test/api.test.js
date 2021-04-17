const request = require('supertest')
const chai = require('chai')
const assert = chai.assert
const app = require('../index')

describe('Testing GET /iecho', () => {
  describe('EXPECTED ERRORS RESPONSES', () => {
    it('Testing the response status', (done) => {
      const queryParams = {}
      request(app)
        .get('/iecho')
        .query(queryParams)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, (_err, res) => {
          console.log('\t\trequest', queryParams)
          console.log('\t\tresponse', res.body)
          done()
        })
    })
    it('Testing text attribute response', (done) => {
      const queryParams = {}
      request(app)
        .get('/iecho')
        .query(queryParams)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, (_err, res) => {
          console.log('\t\trequest', queryParams)
          console.log('\t\tresponse', res.body)
          assert.equal(res.body.error, 'no text', 'El resultado de text es incorrecto')
          done()
        })
    })
  })
  describe('EXPECTED SUCCESS RESPONSES', () => {
    it('Testing the response status', (done) => {
      const queryParams = { text: 'Hola' }
      request(app)
        .get('/iecho')
        .query(queryParams)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, (_err, res) => {
          console.log('\t\trequest', queryParams)
          console.log('\t\tresponse', res.body)
          done()
        })
    })
    it('Testing text attribute response', (done) => {
      const queryParams = { text: 'holA' }
      request(app)
        .get('/iecho')
        .query(queryParams)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, (_err, res) => {
          console.log('\t\trequest', queryParams)
          console.log('\t\tresponse', res.body)
          assert.equal(res.body.text, 'Aloh', 'El resultado de text es incorrecto')
          done()
        })
    })
    it('Testing palindrome flag', (done) => {
      const queryParams = { text: 'recOnocEr' }
      request(app)
        .get('/iecho')
        .query(queryParams)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, (_err, res) => {
          console.log('\t\trequest', queryParams)
          console.log('\t\tresponse', res.body)
          assert.equal(res.body.palindrome, true, 'El valor de palindrome es incorrecto')
          done()
        })
    })
  })
})
