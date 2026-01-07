"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { RevenuePoint } from "@/types/kpi";

export default function RevenueChart({
  data
}: {
  data: RevenuePoint[];
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">
      <h3 className="mb-4 text-lg text-gray-900 font-semibold">
        Monthly Revenue Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
