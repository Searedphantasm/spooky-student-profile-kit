
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface PointsChartProps {
  coursePoints: number;
  taskPoints: number;
  assignmentPoints: number;
}

export function PointsChart({ coursePoints, taskPoints, assignmentPoints }: PointsChartProps) {
  const total = coursePoints + taskPoints + assignmentPoints;
  
  const data = [
    { name: "Course", value: coursePoints, color: "#9b87f5" },
    { name: "Task", value: taskPoints, color: "#F97316" },
    { name: "Assignment", value: assignmentPoints, color: "#0EA5E9" },
  ];

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry, index) => (
              <span className="text-halloween-baseContent">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-sm text-halloween-baseContent/70">Total points</span>
        <p className="text-2xl font-bold text-halloween-baseContent">{total}</p>
      </div>
    </div>
  );
}
