INSERT INTO acotrs (first_name, last_name, age, number_oscars)
VALUES
  ('Matt', 'Damon', '1970-08-10', 5),
  ('Leonardo', 'DiCaprio', '1974-11-11', 1),
  ('Tom', 'Hanks', '1956-07-09', 2),
  ('Emma', 'Stone', '1988-11-06', 2);



-- 1. Count how many actors are in the table
SELECT COUNT(*) FROM actors;

-- 2. Try to add a new actor with some blank fields
INSERT INTO actors (Matt, Damon)
VALUES ('1970-08-10', '5');

