-- Transaction Examples
-- Use transactions for atomic operations

BEGIN TRANSACTION;

-- 1. Create parent record
INSERT INTO orders (user_id, total, status)
VALUES ($1, $2, 'pending')
RETURNING id;

-- 2. Create child records
INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES 
  ($3, $4, $5, $6),
  ($3, $7, $8, $9);

-- 3. Update inventory
UPDATE products SET stock = stock - $5 WHERE id = $4;
UPDATE products SET stock = stock - $8 WHERE id = $7;

COMMIT;
