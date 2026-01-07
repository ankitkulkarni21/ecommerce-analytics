import pandas as pd
import mysql.connector

# ---------- 1. Read CSV ----------
df = pd.read_csv("../data/raw/ecommerce.csv", encoding="ISO-8859-1")

print("Raw rows:", len(df))

# ---------- 2. Clean Data ----------
# Remove cancelled orders
df = df[~df["InvoiceNo"].astype(str).str.startswith("C")]

# Drop rows with missing customer
df = df.dropna(subset=["CustomerID"])

# Convert data types
df["CustomerID"] = df["CustomerID"].astype(int)
df["InvoiceDate"] = pd.to_datetime(df["InvoiceDate"])

# Calculate revenue
df["Revenue"] = df["Quantity"] * df["UnitPrice"]

print("Clean rows:", len(df))

# ---------- 3. Create Dimension Tables ----------
customers = df[["CustomerID", "Country"]].drop_duplicates()
products = df[["StockCode", "Description"]].drop_duplicates()

# ---------- 4. MySQL Connection ----------
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="@nkit21",
    database="ecommerce_analytics"
)

cursor = conn.cursor()

# ---------- 5. Insert Customers ----------
for _, row in customers.iterrows():
    cursor.execute("""
        INSERT IGNORE INTO customers (customer_id, country)
        VALUES (%s, %s)
    """, (row["CustomerID"], row["Country"]))

# ---------- 6. Insert Products ----------
for _, row in products.iterrows():
    cursor.execute("""
        INSERT IGNORE INTO products (product_id, product_name)
        VALUES (%s, %s)
    """, (row["StockCode"], row["Description"]))

# ---------- 7. Insert Orders ----------
for _, row in df.iterrows():
    cursor.execute("""
        INSERT INTO orders
        (order_id, customer_id, order_date, product_id, quantity, unit_price, revenue)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """, (
        row["InvoiceNo"],
        row["CustomerID"],
        row["InvoiceDate"],
        row["StockCode"],
        row["Quantity"],
        row["UnitPrice"],
        row["Revenue"]
    ))

conn.commit()
cursor.close()
conn.close()

print("ETL completed successfully 🚀")
