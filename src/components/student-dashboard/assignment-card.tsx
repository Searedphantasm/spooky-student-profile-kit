
import { MoreVertical } from "lucide-react";

interface AssignmentCardProps {
  title: string;
  instructor: string;
  deadline: string;
  status: "due" | "completed";
}

export function AssignmentCard({
  title,
  instructor,
  deadline,
  status
}: AssignmentCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-halloween-base300 last:border-none">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm text-halloween-baseContent/70">Deadline: {deadline}</p>
          {status === "due" ? (
            <span className="text-xs bg-halloween-accent/20 text-halloween-accent px-2 py-0.5 rounded-full">
              Assignment Due
            </span>
          ) : (
            <span className="text-xs bg-halloween-success/20 text-halloween-success px-2 py-0.5 rounded-full">
              Completed
            </span>
          )}
        </div>
        <h3 className="text-halloween-baseContent font-medium text-base mt-1.5">{title}</h3>
        <p className="text-halloween-baseContent/70 text-sm mt-1">Instructor: {instructor}</p>
      </div>
      <button className="p-1 hover:bg-halloween-base300 rounded-full ml-2">
        <MoreVertical size={18} className="text-halloween-baseContent/70" />
      </button>
    </div>
  );
}
