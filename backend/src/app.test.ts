import request from 'supertest';

import app from './app';

describe('Index', () => {
	it('responds with 200', async () => {
		const response = await request(app).get('/');
		expect(response.status).toEqual(200);
	});
});
