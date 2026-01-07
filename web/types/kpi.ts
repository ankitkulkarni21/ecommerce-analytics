export interface RevenuePoint {
  month: string;
  revenue: number;
}

export interface KPI {
  totalRevenue: number;
  totalCustomers: number;
  avgOrderValue: number;
  topCountry: string;
  revenueTrend: RevenuePoint[];
}
