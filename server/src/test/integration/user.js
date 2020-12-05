const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');
const { connect } = require('../../config/database');
const User = require('../../models/user');

describe('GET /', () => {
  it('it should has status code 200', (done) => {
    supertest(app)
      .get('/')
      .expect(200, {
        message: 'it works'
      })
      .end((err) => {
        if (err) done(err);
        done();
      });
  });
});
describe('Testing Users Endpoints ', () => {
  beforeEach(() => {
    connect();
  });

  afterEach(async () => {
    await User.deleteMany();
    mongoose.connection.close();
  });

  describe('POST /api/v1/user/signup', () => {
    it('should save user to the databse', async () => {
      await supertest(app)
        .post('/api/v1/user/signup')
        .send({
          name: 'Jane Doe',
          emailId: 'jdoe@example.com',
          password: '123456789',
          confirmPassword: '123456789'
        })
        .expect(201);
    });
  });
});
