// matchers

test('test obj', () => {
	const data: { name: string; lastname?: string } = { name: 'nico' };
	data.lastname = 'molina';

	expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('null', () => {
	const data: { name?: string; lastname?: string } | null = null;

	expect(data).toBeNull();
	expect(data).toBeDefined();
	expect(data).not.toBeUndefined();
});

test('booleans', () => {
	expect(true).toEqual(true);
	expect(false).toEqual(false);

	expect(0).toBeFalsy();
	expect('').toBeFalsy();
	expect(false).toBeFalsy();
});

test('string', () => {
	expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
	const numbers: number[] = [1, 2, 3, 4];

	expect(numbers).toContain(3);
});
