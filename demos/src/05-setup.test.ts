// setup / teardown
describe('Set', () => {
	beforeAll(() => {
		// corre antes de todos los test example up db
	});

	afterAll(() => {
		// corre despues de todos los test
	});

	beforeEach(() => {
		// corre antes de cada prueba
	});

	afterEach(() => {
		// corre despues de cada prueba
	});

	test('case 1', () => {
		expect(1 + 1).toBe(2);
	});

	test('case 2', () => {
		expect(1 + 2).toBe(3);
	});

	describe('other group', () => {
		beforeAll(() => {
			// corre antes que los test dentro del conjunto
		});

		test('case 3', () => {
			expect(1 + 1).toBe(2);
		});

		test('case 4', () => {
			expect(1 + 3).toBe(4);
		});
	});
});
