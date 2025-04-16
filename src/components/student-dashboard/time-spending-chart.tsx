
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface TimeSpendingProps {
  data: {
    day: string;
    hours: number;
  }[];
  timeFrame: "daily" | "weekly" | "yearly";
}

export function TimeSpendingChart({ data, timeFrame }: TimeSpendingProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-[180px] sm:h-[200px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: isMobile ? -25 : -10,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "oklch(96% 0.007 247.896)", fontSize: isMobile ? 10 : 12 }}
          />
          <YAxis 
            tickCount={isMobile ? 4 : 7}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "oklch(96% 0.007 247.896)", fontSize: isMobile ? 10 : 12 }}
          />
          <Bar 
            dataKey="hours" 
            fill="oklch(55% 0.288 302.321)" 
            radius={[4, 4, 0, 0]} 
            barSize={isMobile ? 20 : 30} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
