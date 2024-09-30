import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const RevenueChart = () => {
  const data = [
    { month: "Jan", current: 8000000, previous: 12000000 },
    { month: "Feb", current: 16000000, previous: 14000000 },
    { month: "Mar", current: 17000000, previous: 11000000 },
    { month: "Apr", current: 12000000, previous: 10000000 },
    { month: "May", current: 18000000, previous: 16000000 },
    { month: "Jun", current: 23000000, previous: 19000000 },
  ];

  return (
    <div className="w-full">
      <LineChart
      width={1000}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="month" axisLine={{ stroke: "#ccc" }} tickLine={false} />
      <YAxis
        tickFormatter={(value) => `${value / 1000000}M`}
        axisLine={false}
        tickLine={false}
      />
      <CartesianGrid vertical={false} />
      <Tooltip />
      {/* <Legend /> */}

      {/* Black line with dashed ending for current week */}
      <Line
        type="monotone"
        dataKey="current"
        stroke="#000"
        strokeWidth={3}
        dot={false}
        strokeDasharray="5 5" // Dash from May
      />

      {/* Blue line for previous week */}
      <Line
        type="monotone"
        dataKey="previous"
        stroke="#a0c4ff"
        fill="#a0c4ff"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
    </div>
  );
};

export default RevenueChart;
