// Instructions
// Create a simple library system with TypeScript:

// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)
// Class Library: Create a class Library with:

// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.
// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.


//  Interface Book
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // optional
}



//  Class Library
class Library {
  // private books array
  private books: Book[] = [];

  // add a new book
  public addBook(book: Book): void {
    this.books.push(book);
  }

  // get book details by ISBN
  public getBookDetails(isbn: string): Book | string {
    const found = this.books.find((book) => book.isbn === isbn);

    if (found) {
      return found;
    } else {
      return "Book not found";
    }
  }

  // protected getter so child classes can access books
  protected getAllBooks(): Book[] {
    return this.books;
  }
}



//  Class DigitalLibrary (extends Library)
class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  // list all book titles
  public listBooks(): string[] {
    return this.getAllBooks().map((book) => book.title);
  }
}



//  Testing the system
const myDigitalLibrary = new DigitalLibrary("https://mydigitallibrary.com");

// Add books
myDigitalLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "1111",
  publishedYear: 1925,
  genre: "Classic",
});

myDigitalLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "2222",
  publishedYear: 1949,
});

myDigitalLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "3333",
  publishedYear: 2008,
  genre: "Programming",
});

// Get details of specific books
console.log(myDigitalLibrary.getBookDetails("1111"));
console.log(myDigitalLibrary.getBookDetails("2222"));
console.log(myDigitalLibrary.getBookDetails("9999")); // not found

// List all book titles
console.log("Book Titles:", myDigitalLibrary.listBooks());

// Display website
console.log("Library Website:", myDigitalLibrary.website);
