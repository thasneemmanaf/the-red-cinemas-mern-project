const supertest = require('supertest');
const app = require('../../server');

describe('GET /', () => {
  it('it should has status code 400', () => {
    supertest(app).post('/webhook').expect(400);
  });
});
