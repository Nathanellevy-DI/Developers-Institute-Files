// BookApp Component
// Main component that manages the book list state using useState hook
// and allows users to dynamically add new books

import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import List from './List';
import type { Book } from '../types/types';
import './BookApp.css';

const BookApp: React.FC = () => {
    // Initial books to prepopulate the list
    const initialBooks: Book[] = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 3, title: '1984', author: 'George Orwell' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    ];

    // State management using useState hook with Book[] type
    const [books, setBooks] = useState<Book[]>(initialBooks);

    // Form state for new book
    const [newTitle, setNewTitle] = useState<string>('');
    const [newAuthor, setNewAuthor] = useState<string>('');

    // Function to add a new book with unique id
    const addBook = (): void => {
        if (newTitle.trim() && newAuthor.trim()) {
            // Generate unique id based on existing books
            const newId = books.length > 0
                ? Math.max(...books.map(book => book.id)) + 1
                : 1;

            // Create new book object
            const newBook: Book = {
                id: newId,
                title: newTitle.trim(),
                author: newAuthor.trim(),
            };

            // Append to state
            setBooks((prevBooks: Book[]) => [...prevBooks, newBook]);

            // Clear form
            setNewTitle('');
            setNewAuthor('');
        }
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addBook();
    };

    // Handle input changes with proper typing
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewTitle(e.target.value);
    };

    const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewAuthor(e.target.value);
    };

    // Delete a book
    const deleteBook = (id: number): void => {
        setBooks((prevBooks: Book[]) => prevBooks.filter(book => book.id !== id));
    };

    // Render function for each book item (passed to generic List component)
    const renderBook = (book: Book): React.ReactNode => (
        <div className="book-card">
            <div className="book-info">
                <span className="book-icon">📚</span>
                <div className="book-details">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                </div>
            </div>
            <button
                className="delete-btn"
                onClick={() => deleteBook(book.id)}
                aria-label={`Delete ${book.title}`}
            >
                🗑️
            </button>
        </div>
    );

    return (
        <div className="book-app">
            <header className="book-app-header">
                <h1>📖 Book List</h1>
                <p>Manage your reading collection</p>
            </header>

            {/* Add Book Form */}
            <form onSubmit={handleSubmit} className="add-book-form">
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Book Title"
                        value={newTitle}
                        onChange={handleTitleChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Author Name"
                        value={newAuthor}
                        onChange={handleAuthorChange}
                        className="form-input"
                        required
                    />
                    <button
                        type="submit"
                        className="add-btn"
                        disabled={!newTitle.trim() || !newAuthor.trim()}
                    >
                        + Add Book
                    </button>
                </div>
            </form>

            {/* Stats */}
            <div className="book-stats">
                <span className="stat">
                    <strong>{books.length}</strong> book{books.length !== 1 ? 's' : ''} in your collection
                </span>
            </div>

            {/* Book List - Using Generic List Component */}
            <List
                items={books}
                renderItem={renderBook}
                emptyMessage="Your book collection is empty. Add some books!"
            />
        </div>
    );
};

export default BookApp;
