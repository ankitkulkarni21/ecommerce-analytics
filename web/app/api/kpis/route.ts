import { NextResponse } from "next/server";
import { kpis } from "@/data/kpis";

export async function GET() {
  return NextResponse.json(kpis);
}
