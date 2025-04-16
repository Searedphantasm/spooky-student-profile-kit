
import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  label?: string;
}

export const ProgressCircle = ({
  progress,
  size = 40,
  strokeWidth = 4,
  className,
  color = "halloween-primary",
  label,
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-halloween-base300 opacity-30"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`text-${color}`}
          strokeLinecap="round"
        />
      </svg>
      {label && (
        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
          {label}
        </div>
      )}
    </div>
  );
};
