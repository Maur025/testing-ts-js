import BooksService from './books.service.js';

const fakeBooks = [
	{
		_id: 1,
		name: 'Harry Potter',
	},
];

const MongoLibStub = {
	getAll: () => [...fakeBooks],
	create: () => {},
};

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => MongoLibStub));
describe('Test for bookService', () => {
	let service: BooksService;

	beforeEach(() => {
		jest.clearAllMocks();
		service = new BooksService();
	});

	describe('test for getBooks', () => {
		test('should return a list books', async () => {
			//Arrange
			//Act
			const bookList: unknown[] = await service.getBooks();
			//Assert
			expect(bookList.length).toEqual(1);
		});
	});
});
