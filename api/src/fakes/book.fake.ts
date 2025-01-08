import { faker } from '@faker-js/faker';

interface BookInterface {
	_id: string;
	name: string;
	price: string;
}

export const generateOneBook = (): BookInterface => ({
	_id: faker.string.uuid(),
	name: faker.commerce.productName(),
	price: faker.commerce.price(),
});

export const generateManyBooks = (size: number): BookInterface[] => {
	const limit = size ?? 10;

	const fakeBooks: BookInterface[] = [];

	for (let index = 0; index < limit; index++) {
		fakeBooks.push(generateOneBook());
	}

	return [...fakeBooks];
};
