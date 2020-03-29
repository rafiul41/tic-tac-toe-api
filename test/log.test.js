const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('Log Api', () => {
  describe('Post Log', () => {
    it('Should Post a log', (done) => {
      chai.request(server)
        .get('/api/list')
        .end((err, response) => {
          response.should.have.status(200);
          done();
        })
    });
  })
});
