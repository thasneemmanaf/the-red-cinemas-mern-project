const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');
const { connect } = require('../../config/database');
const User = require('../../models/user');

describe('GET /', () => {
  it('it should has status code 200', (done) => {
    supertest(app)
      .get('/api/v1/screen')
      .expect(200)
      .end((err) => {
        if (err) done(err);
        done();
      });
  }).catch();
});
describe('Testing Users Endpoints ', () => {
  beforeEach(() => {
    connect();
  });

  afterEach(async () => {
    await User.deleteMany();
    mongoose.connection.close();
  });
});
