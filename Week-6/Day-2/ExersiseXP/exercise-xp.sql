
-- Exercise 1: Items and Customers


-- 1. All items ordered by price (lowest to highest)
SELECT *
FROM item
ORDER BY price ASC;

-- 2. Items with price >= 80 ordered by price (highest to lowest)
SELECT *
FROM item
WHERE price >= 80
ORDER BY price DESC;

-- 3. First 3 customers in alphabetical order (A-Z) by first name, exclude primary key
SELECT first_name, last_name, email, address_id, activebool, create_date, last_update
FROM customer
ORDER BY first_name ASC
LIMIT 3;

-- 4. All last names in reverse alphabetical order
SELECT last_name
FROM customer
ORDER BY last_name DESC;



-- Exercise 2: dvdrental Database


-- 1. Select all columns from customer table
SELECT *
FROM customer;

-- 2. Display full name using alias
SELECT first_name || ' ' || last_name AS full_name
FROM customer;

-- 3. Select all unique create_date values
SELECT DISTINCT create_date
FROM customer;

-- 4. All customer details in descending order by first name
SELECT *
FROM customer
ORDER BY first_name DESC;

-- 5. Film details ordered by rental_rate ascending
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Address and phone number of customers in Texas district
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- 7. Movie details for film_id 15 or 150
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8. Check if your favorite movie exists (example: 'Inception')
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Inception';

-- 9. Movies starting with first 2 letters of your favorite movie (example: 'In')
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'In%';

-- 10. 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. Next 10 cheapest movies (skip first 10)
SELECT *
FROM film
ORDER BY rental_rate ASC
OFFSET 10
LIMIT 10;

-- 12. Join customer and payment tables, get first name, last name, amount, payment_date ordered by customer_id
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC;

-- 13. Movies not in inventory
SELECT f.*
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

-- 14. Find which city is in which country
SELECT ci.city, co.country
FROM city ci
JOIN country co ON ci.country_id = co.country_id;

-- 15. Bonus: Customer sales by staff member
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
JOIN staff s ON p.staff_id = s.staff_id
ORDER BY s.staff_id ASC;