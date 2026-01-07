"use client";

import { useEffect, useState } from "react";
import { KPI } from "@/types/kpi";
import KpiCard from "@/components/KpiCard";
import RevenueChart from "@/components/RevenueChart";

export default function Dashboard() {
  const [data, setData] = useState<KPI | null>(null);

  useEffect(() => {
    fetch("/api/kpis")
      .then((res) => res.json())
      .then((data: KPI) => setData(data));
  }, []);

  if (!data) {
    return <div className="p-10">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b px-10 py-6 flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            E-commerce Analytics
          </h1>
          <p className="text-gray-500">
            Business performance overview
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/ankitkulkarni21/ecommerce-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 0.3c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.22.08 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.54 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ankitkulkarni21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.43a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1zM20.45 20.45h-3.53v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.69h-3.53V9h3.39v1.56h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.21 2.34 4.21 5.38v6.34z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="p-10 space-y-10">
        {/* KPIs */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard title="Total Revenue" value={`₹${data.totalRevenue.toLocaleString()}`} />
          <KpiCard title="Customers" value={data.totalCustomers.toLocaleString()} />
          <KpiCard title="Avg Order Value" value={`₹${data.avgOrderValue}`} />
          <KpiCard title="Top Country" value={data.topCountry} />
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart data={data.revenueTrend} />
        </section>
      </main>
    </div>
  );
}
