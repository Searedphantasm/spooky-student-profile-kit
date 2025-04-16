
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Bell, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut 
} from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, active, href }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
        active
          ? "bg-halloween-base200 text-halloween-primary"
          : "hover:bg-halloween-base200/60"
      )}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export function Sidebar() {
  return (
    <div className="w-[240px] h-screen bg-halloween-base100 border-r border-halloween-base300 flex flex-col">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-halloween-primary font-bold text-xl">EduSpark</span>
        </Link>
      </div>

      <nav className="mt-6 px-2 flex-1">
        <div className="space-y-1">
          <SidebarItem icon={BarChart3} label="Dashboard" active href="/" />
          <SidebarItem icon={BookOpen} label="My Courses" href="/courses" />
          <SidebarItem icon={FileText} label="Assignments" href="/assignments" />
        </div>

        <div className="mt-8 pt-4 border-t border-halloween-base300 space-y-1">
          <SidebarItem icon={MessageSquare} label="Messages" href="/messages" />
          <SidebarItem icon={Bell} label="Notifications" href="/notifications" />
          <SidebarItem icon={Users} label="Instructors" href="/instructors" />
          <SidebarItem icon={Calendar} label="Calendar" href="/calendar" />
        </div>

        <div className="absolute bottom-4 left-0 right-0 px-2 space-y-1">
          <SidebarItem icon={Settings} label="Settings" href="/settings" />
          <SidebarItem icon={HelpCircle} label="Support" href="/support" />
          <div className="px-4 py-3 text-halloween-error flex items-center gap-3 rounded-lg cursor-pointer hover:bg-halloween-base200/60">
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
