import { Person } from './06-person';

describe('Test for Person', () => {
	let person: Person;
	beforeEach(() => {
		person = new Person('Mauro', 45, 1.7);
	});

	test('should return down', () => {
		person.weight = 45;
		const imc = person.calcIMC();

		expect(imc).toBe('down');
	});

	test('should return normal', () => {
		person.weight = 59;

		const imc = person.calcIMC();

		expect(imc).toBe('normal');
	});
});
