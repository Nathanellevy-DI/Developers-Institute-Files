
-- Exercise 1


-- 1. List all languages
SELECT *
FROM language;

-- 2. Films with their languages
SELECT
    film.title,
    film.description,
    language.name AS language
FROM film
JOIN language
    ON film.language_id = language.language_id;

-- 3. All languages, even without films
SELECT
    film.title,
    film.description,
    language.name AS language
FROM language
LEFT JOIN film
    ON film.language_id = language.language_id;

-- 4. Create new_film table
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Insert films
INSERT INTO new_film (name)
VALUES
('Interstellar'),
('Inception'),
('The Matrix');

-- 5. Create customer_review table
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(255),
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_film
        FOREIGN KEY (film_id)
        REFERENCES new_film(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_language
        FOREIGN KEY (language_id)
        REFERENCES language(language_id)
);

-- 6. Insert movie reviews
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing Movie', 9, 'Loved the visuals and story.'),
(2, 1, 'Mind Blowing', 8, 'Very complex but enjoyable.');

-- 7. Delete a film with reviews (CASCADE test)
DELETE FROM new_film
WHERE id = 1;

-- Exercise 2


-- 1. Update film languages
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);

-- 2. Foreign keys in customer table
SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer'
AND tc.constraint_type = 'FOREIGN KEY';

-- 3. Drop customer_review table
DROP TABLE customer_review;

-- 4. Count outstanding rentals
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- 5. 30 most expensive outstanding movies
SELECT
    film.title,
    film.replacement_cost
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

-- 6. Movie search queries

-- Film 1: Sumo wrestler + Penelope Monroe
SELECT DISTINCT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope'
AND actor.last_name = 'Monroe'
AND film.description ILIKE '%sumo%';

-- Film 2: Short documentary, rated R
SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';

-- Film 3: Rented by Matthew Mahan, paid > $4, returned between dates
SELECT DISTINCT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND payment.amount > 4
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Film 4: Same customer, contains 'boat', expensive replacement
SELECT DISTINCT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND (
    film.title ILIKE '%boat%'
    OR film.description ILIKE '%boat%'
)
ORDER BY film.replacement_cost DESC;