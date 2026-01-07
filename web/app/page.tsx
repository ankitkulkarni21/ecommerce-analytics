"use client";

import { useEffect, useState } from "react";
import { KPI } from "@/types/kpi";
import KpiCard from "@/components/KpiCard";
import RevenueChart from "@/components/RevenueChart";
import { Github, Linkedin } from "lucide-react";


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
    <h1 className="text-2xl text-gray-900 font-bold">
      E-commerce Analytics
    </h1>
    <p className="text-gray-500">
      Business performance overview
    </p>
  </div>

  {/* Right */}
  <div className="flex items-center gap-4">
    <a
      href="https://github.com/ankitkulkarni21/ecommerce-analytics"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-black transition"
    >
      <Github size={22} />
    </a>

    <a
      href="https://www.linkedin.com/in/ankitkulkarni21/"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 transition"
    >
      <Linkedin size={22} />
    </a>
  </div>
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
