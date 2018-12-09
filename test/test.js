const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const server = supertest.agent("http://localhost:3800/");

describe('TESTING GET ALL USERS ROUTES', () => {
  it('Users routes', done => {
    server
    .get('api/users')
    .expect("Content-type",/json/)
    .expect(200)
    .end((err, res) => {
      describe('should return a correct users data', () => {
        it('users length should be 7', () => {
          expect(res.body.length).to.equal(7)
        })
        it('first user should be "mario"', () => {
          expect(res.body[0].username).to.equal('mario')
        })
      })
      done();
    })
  })
})