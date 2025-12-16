
-- Drop tables if they exist (safe re-run)
DROP TABLE IF EXISTS FirstTab;
DROP TABLE IF EXISTS SecondTab;

-- Create FirstTab table
CREATE TABLE FirstTab (
    id INTEGER,
    name VARCHAR(10)
);

-- Insert data into FirstTab
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

-- Select all from FirstTab
SELECT * FROM FirstTab;

-- Create SecondTab table
CREATE TABLE SecondTab (
    id INTEGER
);

-- Insert data into SecondTab
INSERT INTO SecondTab VALUES
(5),
(NULL);

-- Select all from SecondTab
SELECT * FROM SecondTab;


-- Questions (Predicted Outputs & Execution)


-- Q1: SELECT COUNT(*) where id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)
-- Prediction: 
-- SecondTab WHERE id IS NULL returns only NULL.
-- NOT IN (NULL) evaluates to UNKNOWN for all comparisons except NULL.
-- So all rows will be excluded, result = 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

-- Q2: SELECT COUNT(*) where id NOT IN (SELECT id FROM SecondTab WHERE id = 5)
-- Prediction:
-- Subquery returns 5. NOT IN (5) excludes 5, includes 6, 7, and NULL is ignored in COUNT?
-- In PostgreSQL, comparison with NULL in NOT IN returns UNKNOWN, row is excluded.
-- NULL row is excluded. So only 6 and 7 are counted. Result = 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- Q3: SELECT COUNT(*) where id NOT IN (SELECT id FROM SecondTab)
-- Prediction:
-- Subquery returns 5, NULL
-- NOT IN (5, NULL) -> all comparisons UNKNOWN -> all rows excluded -> result = 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- Q4: SELECT COUNT(*) where id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)
-- Prediction:
-- Subquery returns 5
-- NOT IN (5) -> excludes 5, includes 6, 7, NULL excluded -> result = 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );