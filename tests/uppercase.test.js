const request = require('supertest');
const app = require('../server');

describe('uppercase endpoint', () => {
    it('returns an uppercase string', async () => {
        const res = await request(app)
            .get('/uppercase/hello')
            .send();
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ result: "HELLO" });
    });
});