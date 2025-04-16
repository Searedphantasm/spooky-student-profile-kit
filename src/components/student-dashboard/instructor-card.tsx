
import { cn } from "@/lib/utils";

interface InstructorCardProps {
  name: string;
  course: string;
  avatarUrl: string;
  className?: string;
}

export function InstructorCard({
  name,
  course,
  avatarUrl,
  className
}: InstructorCardProps) {
  return (
    <div className={cn("flex items-center gap-3 p-3", className)}>
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-halloween-baseContent font-medium">{name}</h4>
        <p className="text-halloween-baseContent/70 text-sm">Course: {course}</p>
      </div>
    </div>
  );
}
