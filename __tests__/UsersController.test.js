import request from 'supertest';

import app from '../src/app';

describe('SessionController', () => {
  it('it should be able create user', async () => {
    const response = await request(app).post('/users/create').send({
      name: 'Everton',
      password: '12345',
      phone: '121',
      email: 'r@gmail.com',
      document: 'CPF',
      type_company: 'Barbearia',
      date_of_birth: '1987-11-25',
    });

    expect(response.body).toHaveProperty('id');
  });

  it('it should be able list users', async () => {
    const response = await request(app).get('/users/list').send();

    expect(response.body).toEqual(expect.arrayContaining(response.body));
  });
});
