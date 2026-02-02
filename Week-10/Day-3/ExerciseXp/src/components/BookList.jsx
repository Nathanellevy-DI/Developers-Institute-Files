import { useSelector, useDispatch } from 'react-redux';
import {
    selectBooksBySelectedGenre,
    selectSelectedGenre,
    selectAllGenres,
    setSelectedGenre,
} from '../store/booksSlice';
import './BookList.css';

const BookList = () => {
    const dispatch = useDispatch();

    // Use selectors to get data from the Redux store
    const books = useSelector(selectBooksBySelectedGenre);
    const selectedGenre = useSelector(selectSelectedGenre);
    const genres = useSelector(selectAllGenres);

    const handleGenreChange = (genre) => {
        dispatch(setSelectedGenre(genre));
    };

    return (
        <div className="book-list-container">
            <h1 className="title">📚 Book Inventory</h1>

            {/* Genre Filter Buttons */}
            <div className="genre-filters">
                {genres.map((genre) => (
                    <button
                        key={genre}
                        className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                        onClick={() => handleGenreChange(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            {/* Genre Dropdown (Alternative UI) */}
            <div className="genre-dropdown">
                <label htmlFor="genre-select">Or select from dropdown: </label>
                <select
                    id="genre-select"
                    value={selectedGenre}
                    onChange={(e) => handleGenreChange(e.target.value)}
                >
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            {/* Book Count */}
            <p className="book-count">
                Showing <strong>{books.length}</strong> book{books.length !== 1 ? 's' : ''}
                {selectedGenre !== 'All' && ` in ${selectedGenre}`}
            </p>

            {/* Book Grid */}
            <div className="books-grid">
                {books.map((book) => (
                    <div key={book.id} className={`book-card ${book.genre.toLowerCase().replace(' ', '-')}`}>
                        <div className="book-genre-tag">{book.genre}</div>
                        <h3 className="book-title">{book.title}</h3>
                        <p className="book-author">by {book.author}</p>
                    </div>
                ))}
            </div>

            {books.length === 0 && (
                <p className="no-books">No books found in this genre.</p>
            )}
        </div>
    );
};

export default BookList;
