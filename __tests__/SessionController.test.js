import request from 'supertest';

import app from '../src/app';

describe('SessionController', () => {
  it('it should be able session', async () => {
    const response = await request(app).post('/login').send({
      email: 'e@gmail.com',
      password: '12345',
    });

    expect(response.body).toHaveProperty('token');
  });

  it('it should be able Password does not match', async () => {
    const response = await request(app).post('/login').send({
      email: 'e@gmail.com',
      password: '1234',
    });

    expect(response.body).toEqual({ error: 'Password does not match' });
  });

  it('it should be able User not found', async () => {
    const response = await request(app).post('/login').send({
      email: 'a@gmail.com',
      password: '1234',
    });

    expect(response.body).toEqual({ error: 'User not found' });
  });
});
