import { Application } from 'express';
import { Server } from 'http';
import request from 'supertest';
import createApp from '../src/app';

describe('Test for hello endpoint', (): void => {
	let app: Application | null = null;
	let server: Server | null = null;

	beforeAll(() => {
		app = createApp();
		server = app.listen(3001);
	});

	afterAll(async () => {
		await server?.close();
	});

	describe('test for [GET] /', () => {
		test('should return "Hello World!"', () =>
			request(app)
				.get('/')
				.expect(200)
				.then(response => {
					expect(response.text).toEqual('Hello World!');
				}));
	});
});
