import request from 'supertest';
import { app } from './server';

describe('GET /health', () => {
  it('responds with `ok` json', () => {
    request(app)
      .get('/health')
      .expect('Content-Type', /application\/json/)
      .expect(200)
      .then((res) => {
        expect(res.body.health).toBe('ok');
      });
  });
});
