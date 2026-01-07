CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  country VARCHAR(100)
);

CREATE TABLE products (
  product_id VARCHAR(50) PRIMARY KEY,
  product_name VARCHAR(255)
);

CREATE TABLE orders (
  order_id VARCHAR(50),
  customer_id INT,
  order_date DATETIME,
  product_id VARCHAR(50),
  quantity INT,
  unit_price DECIMAL(10,2),
  revenue DECIMAL(10,2)
);
