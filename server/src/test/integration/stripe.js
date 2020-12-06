const supertest = require('supertest');
const app = require('../../server');

describe('Stripe webhook test', () => {
  it('it should has status code 400', async () => {
    await supertest(app).post('/webhook').expect(400);
  });
});
