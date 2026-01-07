# 📊 E-commerce Analytics Platform

An **end-to-end business & data analytics project** that demonstrates how raw transactional data can be transformed into **actionable business insights** using **Python ETL, MySQL, SQL analytics, Tableau Public dashboards, and a TypeScript-based Next.js analytics UI deployed on Vercel**.

🔗 **Live Dashboard:** (https://ecommerce-analytics-woad.vercel.app/)

---

## 🧠 Business Problem

E-commerce businesses generate large volumes of transactional data but often lack clear visibility into:

* Revenue trends over time
* Customer retention and repeat purchases
* High-value customers and products
* Regional performance

**Goal:** Build a scalable analytics solution that converts raw sales data into KPIs and dashboards to support **data-driven business decisions**.

---

## 🏗️ Architecture Overview

```
Raw CSV Data
   ↓
Python ETL (Pandas)
   ↓
MySQL Analytics Database
   ↓
SQL KPIs & Aggregations
   ↓
Tableau Public Dashboards
   ↓
Next.js (TypeScript) Analytics UI
   ↓
Vercel Deployment
```

---

## 🧰 Tech Stack

| Layer           | Technology                        |
| --------------- | --------------------------------- |
| Data Source     | Kaggle E-commerce Dataset         |
| ETL             | Python, Pandas                    |
| Database        | MySQL                             |
| Analytics       | SQL (joins, aggregations)         |
| Visualization   | Tableau Public                    |
| Web App         | Next.js, TypeScript, Tailwind CSS |
| Charts          | Recharts                          |
| Hosting         | Vercel                            |
| Version Control | GitHub                            |

---

## 📁 Project Structure

```
ecommerce-analytics/
├── data/
│   ├── raw/               # Raw CSV data
│   └── tableau/           # CSV extracts for Tableau Public
├── etl/
│   └── load_data.py       # Python ETL script
├── sql/
│   ├── schema.sql         # MySQL schema
│   └── analysis_queries.sql
├── web/                   # Next.js (TypeScript) app
│   ├── app/
│   ├── components/
│   ├── data/
│   └── types/
├── README.md
└── .gitignore
```

---

## 🔄 ETL Pipeline (Python + Pandas)

**Extract**

* Reads raw e-commerce CSV data

**Transform**

* Removes cancelled orders
* Handles missing customer data
* Converts data types
* Calculates revenue per order

**Load**

* Inserts clean data into MySQL fact & dimension tables

This pipeline ensures analytics-ready data for downstream use.

---

## 🗄️ Data Model (MySQL)

* `customers` – customer & country information
* `products` – product catalog
* `orders` – transactional fact table with revenue

The model follows a **star schema**, optimized for analytical queries.

---

## 📊 SQL Analytics (KPIs)

Key metrics calculated using SQL:

* Total Revenue
* Monthly Revenue Trend
* Average Order Value (AOV)
* Customer Lifetime Value (CLV)
* Repeat Purchase Behavior
* Top Products by Revenue
* Revenue by Country

These queries power both Tableau dashboards and the web analytics UI.

---

## 📈 Tableau Public Dashboards

Three interactive dashboards were built:

1. **Executive Revenue Dashboard**

   * Total revenue
   * Monthly revenue trend
   * Revenue by country

2. **Customer Insights Dashboard**

   * Top customers by revenue
   * Repeat customers analysis

3. **Product Performance Dashboard**

   * Top products
   * Product-wise revenue trends

All dashboards are published on **Tableau Public** for easy sharing.

---

## 🌐 Next.js Analytics Dashboard

A **TypeScript-based Next.js dashboard** was built to present KPIs in a business-friendly UI:

* KPI cards (Revenue, Customers, AOV, Top Country)
* Monthly revenue trend chart
* Clean, responsive design
* GitHub & LinkedIn quick links

The app is deployed on **Vercel**.

---

## 🚀 Deployment

* **GitHub** – Source code versioning
* **Vercel** – Hosting the Next.js analytics dashboard
* **Tableau Public** – Hosting interactive dashboards

---

## 🧠 Key Learnings

* Designing analytics-ready data models
* Building ETL pipelines using Python & Pandas
* Writing business-focused SQL queries
* Creating executive-friendly dashboards
* Deploying a full-stack analytics application

---

## 📌 Resume Highlights

* Built an end-to-end **e-commerce analytics platform** using MySQL, Python ETL, SQL, Tableau Public, and Next.js (TypeScript)
* Designed and executed ETL pipelines to clean and transform raw business data
* Developed SQL-based KPIs to analyze revenue trends, customer behavior, and product performance
* Created interactive Tableau dashboards and a deployed web analytics UI on Vercel

---

## 📬 Contact

**Author:** Ankit Kulkarni
🔗 LinkedIn: [https://www.linkedin.com/in/ankitkulkarni21/)
🔗 GitHub: [https://github.com/ankitkulkarni21/)

---

⭐ If you found this project useful, feel free to star the repository!
