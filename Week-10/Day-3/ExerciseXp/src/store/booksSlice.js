import { createSlice, createSelector } from '@reduxjs/toolkit';

// Initial state with an array of books
const initialState = {
    books: [
        { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
        { id: 2, title: 'It', author: 'Stephen King', genre: 'Horror' },
        { id: 3, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
        { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 5, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
        { id: 6, title: 'A Game of Thrones', author: 'George R.R. Martin', genre: 'Fantasy' },
        { id: 7, title: 'The Name of the Wind', author: 'Patrick Rothfuss', genre: 'Fantasy' },
        { id: 8, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
        { id: 9, title: 'Foundation', author: 'Isaac Asimov', genre: 'Science Fiction' },
        { id: 10, title: 'Ender\'s Game', author: 'Orson Scott Card', genre: 'Science Fiction' },
        { id: 11, title: 'Neuromancer', author: 'William Gibson', genre: 'Science Fiction' },
        { id: 12, title: 'The Haunting of Hill House', author: 'Shirley Jackson', genre: 'Horror' },
    ],
    selectedGenre: 'All',
};

// Create the books slice
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        },
    },
});

// Export actions
export const { setSelectedGenre, addBook, removeBook } = booksSlice.actions;

// Base selectors
const selectBooksState = (state) => state.books;

// Memoized selector to get all books
export const selectBooks = createSelector(
    [selectBooksState],
    (booksState) => booksState.books
);

// Memoized selector to get selected genre
export const selectSelectedGenre = createSelector(
    [selectBooksState],
    (booksState) => booksState.selectedGenre
);

// Memoized selector for Horror books
export const selectHorrorBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Horror')
);

// Memoized selector for Fantasy books
export const selectFantasyBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Fantasy')
);

// Memoized selector for Science Fiction books
export const selectScienceFictionBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Science Fiction')
);

// Memoized selector for books based on selected genre
export const selectBooksBySelectedGenre = createSelector(
    [selectBooks, selectSelectedGenre],
    (books, selectedGenre) => {
        if (selectedGenre === 'All') {
            return books;
        }
        return books.filter(book => book.genre === selectedGenre);
    }
);

// Selector to get all unique genres
export const selectAllGenres = createSelector(
    [selectBooks],
    (books) => {
        const genres = [...new Set(books.map(book => book.genre))];
        return ['All', ...genres.sort()];
    }
);

export default booksSlice.reducer;
