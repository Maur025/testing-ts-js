export const sum = (a: number, b: number): number => {
	return a + b;
};

export const multiply = (a: number, b: number): number => {
	return a * b;
};

export const divide = (a: number, b: number): number | null => {
	if (b === 0) {
		return null;
	}

	return a / b;
};

export const percentage = (total: number, percentage: number): number => {
	return (total / 100) * percentage;
};
