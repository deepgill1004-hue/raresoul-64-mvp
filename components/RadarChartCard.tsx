"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer
} from "recharts";
import type { RadarPoint } from "@/lib/types";

export function RadarChartCard({ data }: { data: RadarPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#cbd8cc" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#17201c", fontSize: 12 }} />
          <Radar dataKey="score" stroke="#d9745f" fill="#d9745f" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
