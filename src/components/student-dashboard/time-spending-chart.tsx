
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface TimeSpendingProps {
  data: {
    day: string;
    hours: number;
  }[];
  timeFrame: "daily" | "weekly" | "yearly";
}

export function TimeSpendingChart({ data, timeFrame }: TimeSpendingProps) {
  return (
    <div className="h-[200px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "oklch(96% 0.007 247.896)", fontSize: 12 }}
          />
          <YAxis 
            tickCount={7}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "oklch(96% 0.007 247.896)", fontSize: 12 }}
          />
          <Bar 
            dataKey="hours" 
            fill="oklch(55% 0.288 302.321)" 
            radius={[4, 4, 0, 0]} 
            barSize={30} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
