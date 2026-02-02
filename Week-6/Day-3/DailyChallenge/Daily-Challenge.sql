
-- Part I : One to One (Customer & Customer Profile)


-- Drop tables if they exist (safe re-run)
DROP TABLE IF EXISTS customer_profile;
DROP TABLE IF EXISTS customer;

-- Create Customer table
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

-- Create Customer Profile table (One-to-One)
CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INTEGER UNIQUE,

    CONSTRAINT fk_customer
        FOREIGN KEY (customer_id)
        REFERENCES customer(id)
        ON DELETE CASCADE
);

-- Insert customers
INSERT INTO customer (first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES
(TRUE, (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')),
(FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));


-- Queries (Joins)


-- First name of logged-in customers
SELECT customer.first_name
FROM customer
JOIN customer_profile
    ON customer.id = customer_profile.customer_id
WHERE customer_profile.isLoggedIn = TRUE;

-- All customers, even those without a profile
SELECT
    customer.first_name,
    customer_profile.isLoggedIn
FROM customer
LEFT JOIN customer_profile
    ON customer.id = customer_profile.customer_id;

-- Number of customers that are NOT logged in
SELECT COUNT(*)
FROM customer_profile
WHERE isLoggedIn = FALSE;



-- Part II : Many to Many (Book, Student, Library)


-- Drop tables if they exist (safe re-run)
DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS book;

-- Create Book table
CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Insert books
INSERT INTO book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create Student table with age constraint
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

-- Insert students
INSERT INTO student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library junction table
CREATE TABLE library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,

    CONSTRAINT pk_library PRIMARY KEY (book_fk_id, student_fk_id),

    CONSTRAINT fk_book
        FOREIGN KEY (book_fk_id)
        REFERENCES book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_student
        FOREIGN KEY (student_fk_id)
        REFERENCES student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insert records using subqueries
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES
(
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-08-12'
);


-- Display Queries


-- All columns from junction table
SELECT *
FROM library;

-- Student name and borrowed book title
SELECT
    student.name,
    book.title
FROM library
JOIN student ON library.student_fk_id = student.student_id
JOIN book ON library.book_fk_id = book.book_id;

-- Average age of students who borrowed Alice In Wonderland
SELECT AVG(student.age)
FROM library
JOIN student ON library.student_fk_id = student.student_id
JOIN book ON library.book_fk_id = book.book_id
WHERE book.title = 'Alice In Wonderland';

-- Delete a student (cascade effect)
DELETE FROM student
WHERE name = 'Patrick';
