-- Total Revenue
SELECT 
  ROUND(SUM(revenue), 2) AS total_revenue
FROM orders;

-- Monthly Revenue Trend
SELECT
  DATE_FORMAT(order_date, '%Y-%m') AS month,
  ROUND(SUM(revenue), 2) AS monthly_revenue
FROM orders
GROUP BY month
ORDER BY month;

-- Top Customers by Revenue
SELECT
  c.customer_id,
  c.country,
  ROUND(SUM(o.revenue), 2) AS total_revenue
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.customer_id, c.country
ORDER BY total_revenue DESC
LIMIT 10;

-- Repeat Customers
SELECT
  customer_id,
  COUNT(DISTINCT order_id) AS total_orders
FROM orders
GROUP BY customer_id
HAVING total_orders > 1
ORDER BY total_orders DESC;

-- Top Products by Revenue
SELECT
  p.product_name,
  ROUND(SUM(o.revenue), 2) AS product_revenue
FROM orders o
JOIN products p ON o.product_id = p.product_id
GROUP BY p.product_name
ORDER BY product_revenue DESC
LIMIT 10;

-- Revenue by Country
SELECT
  c.country,
  ROUND(SUM(o.revenue), 2) AS country_revenue
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.country
ORDER BY country_revenue DESC;

-- Average order value
SELECT
  ROUND(SUM(revenue) / COUNT(DISTINCT order_id), 2) AS avg_order_value
FROM orders;

-- Lifetime value of a customer
SELECT
  customer_id,
  ROUND(SUM(revenue), 2) AS lifetime_value
FROM orders
GROUP BY customer_id
ORDER BY lifetime_value DESC;
