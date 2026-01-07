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
      <header className="bg-white border-b px-10 py-6">
        <h1 className="text-2xl text-gray-900 font-bold">
          E-commerce Analytics
        </h1>
        <p className="text-gray-500">
          Business performance overview
        </p>
      </header>

      <main className="p-10 space-y-10">
        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard
            title="Total Revenue"
            value={`₹${data.totalRevenue.toLocaleString()}`}
          />
          <KpiCard
            title="Customers"
            value={data.totalCustomers.toLocaleString()}
          />
          <KpiCard
            title="Avg Order Value"
            value={`₹${data.avgOrderValue}`}
          />
          <KpiCard
            title="Top Country"
            value={data.topCountry}
          />
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart data={data.revenueTrend} />
        </section>
      </main>
    </div>
  );
}
