import { generateManyBooks } from '../fakes/book.fake';
import BooksService from './books.service.js';

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib.js', () =>
	jest.fn().mockImplementation(() => ({ getAll: mockGetAll, create: () => {} }))
);
describe('Test for bookService', () => {
	let service: BooksService;

	beforeEach(() => {
		jest.clearAllMocks();
		service = new BooksService();
	});

	describe('test for getBooks', () => {
		test('should return a list books', async () => {
			//Arrange
			const fakeBooks = generateManyBooks(20);

			mockGetAll.mockResolvedValue(fakeBooks);
			//Act
			const bookList: unknown[] = await service.getBooks({});
			//Assert
			expect(bookList.length).toEqual(fakeBooks.length);
			expect(mockGetAll).toHaveBeenCalled();
			expect(mockGetAll).toHaveBeenCalledTimes(1);
			expect(mockGetAll).toHaveBeenCalledWith('books', {});
		});

		test('should return other list books', async () => {
			//Arrange
			const fakeBooks = generateManyBooks(4);

			mockGetAll.mockResolvedValue(fakeBooks);
			//Act
			const bookList: { name: string }[] = await service.getBooks({});
			//Assert
			expect(bookList[0].name).toEqual(fakeBooks[0].name);
		});
	});
});
