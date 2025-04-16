
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const daysOfWeek = ["دو", "سه", "چهار", "پنج", "جمعه", "شنبه", "یک"];

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
            left: 5,
            right: isMobile ? -25 : -10,
            bottom: 5,
          }}
          layout="horizontal"
        >
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "oklch(96% 0.007 247.896)", fontSize: isMobile ? 10 : 12 }}
            reversed={true}
          />
          <YAxis 
            tickCount={isMobile ? 4 : 7}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "oklch(96% 0.007 247.896)", fontSize: isMobile ? 10 : 12 }}
            orientation="right"
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
