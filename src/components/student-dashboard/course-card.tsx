
import { MoreVertical } from "lucide-react";
import { ProgressCircle } from "../ui/progress-circle";

interface CourseCardProps {
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

export function CourseCard({ 
  title, 
  instructor, 
  progress, 
  totalLessons,
  completedLessons 
}: CourseCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-halloween-base200 rounded-lg">
      <div className="flex-1">
        <h3 className="text-halloween-baseContent font-medium text-base">{title}</h3>
        <p className="text-halloween-baseContent/70 text-sm mt-1">استاد: {instructor}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <ProgressCircle 
          progress={progress} 
          size={44} 
          strokeWidth={4}
          label={`${completedLessons}/${totalLessons}`}
        />
        <button className="p-1 hover:bg-halloween-base300 rounded-full">
          <MoreVertical size={18} className="text-halloween-baseContent/70" />
        </button>
      </div>
    </div>
  );
}
