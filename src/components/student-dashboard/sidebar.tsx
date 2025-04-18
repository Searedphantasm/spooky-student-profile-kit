
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
  LogOut,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  href: string;
}

interface SidebarProps {
  onClose?: () => void;
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

export function Sidebar({ onClose }: SidebarProps) {
  // Get current path to highlight active item
  const currentPath = window.location.pathname;

  return (
    <div className="w-[240px] h-screen bg-halloween-base100 border-l border-halloween-base300 flex flex-col relative">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute left-2 top-2 p-1 text-halloween-baseContent hover:text-halloween-primary"
        >
          <X size={20} />
        </button>
      )}
      
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-halloween-primary font-bold text-xl">ادوسپارک</span>
        </Link>
      </div>

      <nav className="mt-6 px-2 flex-1">
        <div className="space-y-1">
          <SidebarItem 
            icon={BarChart3} 
            label="داشبورد" 
            active={currentPath === "/"} 
            href="/" 
          />
          <SidebarItem 
            icon={BookOpen} 
            label="دوره‌های من" 
            active={currentPath === "/courses"} 
            href="/courses" 
          />
          <SidebarItem 
            icon={FileText} 
            label="تکالیف" 
            active={currentPath === "/assignments"} 
            href="/assignments" 
          />
        </div>

        <div className="mt-8 pt-4 border-t border-halloween-base300 space-y-1">
          <SidebarItem 
            icon={MessageSquare} 
            label="پیام‌ها" 
            active={currentPath === "/messages"} 
            href="/messages" 
          />
          <SidebarItem 
            icon={Bell} 
            label="اعلان‌ها" 
            active={currentPath === "/notifications"} 
            href="/notifications" 
          />
          <SidebarItem 
            icon={Users} 
            label="استادان" 
            active={currentPath === "/instructors"} 
            href="/instructors" 
          />
          <SidebarItem 
            icon={Calendar} 
            label="تقویم" 
            active={currentPath === "/calendar"} 
            href="/calendar" 
          />
        </div>

        <div className="absolute bottom-4 left-0 right-0 px-2 space-y-1">
          <SidebarItem 
            icon={Settings} 
            label="تنظیمات" 
            active={currentPath === "/settings"} 
            href="/settings" 
          />
          <SidebarItem 
            icon={HelpCircle} 
            label="پشتیبانی" 
            active={currentPath === "/support"} 
            href="/support" 
          />
          <div className="px-4 py-3 text-halloween-error flex items-center gap-3 rounded-lg cursor-pointer hover:bg-halloween-base200/60">
            <LogOut size={20} />
            <span className="font-medium">خروج</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
