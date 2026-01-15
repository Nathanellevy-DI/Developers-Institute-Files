-- Create database
CREATE DATABASE public;
-- Connect to the database (run after creating it)
-- \c public
-- Create items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price INTEGER
);
-- Create customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);
-- Insert data into items table
INSERT INTO items (name, price)
VALUES ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);
-- Insert data into customers table
INSERT INTO customers (first_name, last_name)
VALUES ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');
-- Fetch all items
SELECT *
FROM items;
-- Fetch all items with price above 80 (80 not included)
SELECT *
FROM items
WHERE price > 80;
-- Fetch all items with price below 300 (300 included)
SELECT *
FROM items
WHERE price <= 300;
-- Fetch all customers whose last name is 'Smith'
SELECT *
FROM customers
WHERE last_name = 'Smith';
-- Outcome: no rows returned because there is no customer with last name Smith
-- Fetch all customers whose last name is 'Jones'
SELECT *
FROM customers
WHERE last_name = 'Jones';
-- Fetch all customers whose first name is not 'Scott'
SELECT *
FROM customers
WHERE first_name <> 'Scott';