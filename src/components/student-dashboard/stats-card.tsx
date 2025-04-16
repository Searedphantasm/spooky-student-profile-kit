
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconClassName?: string;
}

export function StatsCard({ 
  title, 
  value, 
  icon: Icon,
  iconClassName 
}: StatsCardProps) {
  return (
    <div className="flex items-start gap-3 p-5 bg-halloween-base200 rounded-xl">
      <div className={cn(
        "p-2 rounded-lg bg-halloween-base100/50",
        iconClassName
      )}>
        <Icon size={22} className="text-halloween-baseContent" />
      </div>
      <div>
        <p className="text-halloween-baseContent/70 text-sm">{title}</p>
        <p className="text-halloween-baseContent font-semibold text-3xl mt-1">{value}</p>
      </div>
    </div>
  );
}
