import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Math Problems', () => {
  it('should be able to give add problems', () =>
    request(Server)
      .get('/api/add?max=100&min=10&size=10')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(10);
      }));
  it('should be able to give sub problems', () =>
    request(Server)
      .get('/api/sub?max=100&min=10&size=10')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(10);
      }));
  it('should be able to give mul problems', () =>
    request(Server)
      .get('/api/mul?max=100&min=10&size=10')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(10);
      }));
  it('should be able to give div problems', () =>
      request(Server)
        .get('/api/div?max=100&min=10&size=10')
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an.an('array')
            .of.length(10);
        }));
  it('Check for error response', () =>
    request(Server)
      .get('/api/badendpoint?max=100&min=10&size=10')
      .expect('Content-Type', /json/)
      .expect(404)

      );


  it('should be able to give div problems', () =>
    request(Server)
    .get('/api/addsub?max=100&min=10&size=10')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('array')
        .of.length(10);
    }));

});
