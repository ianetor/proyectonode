const request = require('supertest');
const app = require('../src/app.js');

describe('API Productos', () => {

  test('GET /api/productos devuelve lista', async () => {
    const res = await request(app).get('/api/productos');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/buscarporId/:id devuelve 404 si no existe', async () => {
  const res = await request(app).get('/api/buscarporId/9999');

  expect(res.statusCode).toBe(404);
});

});
