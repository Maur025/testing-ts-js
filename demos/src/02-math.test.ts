import { sum, multiply, divide, percentage } from './02-math';

describe('test for math', () => {
	describe('test for sum', () => {
		test('add 1 + 3 should be 4', () => {
			const result = sum(1, 3);
			expect(result).toBe(4);
		});
	});

	describe('test for multiply', () => {
		test('should be 4', () => {
			const result = multiply(2, 2);
			expect(result).toBe(4);
		});
	});

	describe('test for divide', () => {
		test('should divide', () => {
			const result = divide(6, 3);
			expect(result).toBe(2);

			const result2 = divide(5, 2);
			expect(result2).toBe(2.5);
		});

		test('should divide for zero', () => {
			const result = divide(6, 0);
			expect(result).toBeNull();

			const result2 = divide(5, 0);
			expect(result2).toBeNull();
		});
	});

	describe('test for percentage', () => {
		test('13% of 100 should be 13', () => {
			const result: number = percentage(100, 13);
			expect(result).toBe(13);
		});

		test('87% of 1000 should be 870', () => {
			const result: number = percentage(1000, 87);
			expect(result).toBe(870);
		});
	});
});
