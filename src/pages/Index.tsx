
import { useState } from "react";
import { Sidebar } from "@/components/student-dashboard/sidebar";
import { StatsCard } from "@/components/student-dashboard/stats-card";
import { CourseCard } from "@/components/student-dashboard/course-card";
import { Tabs } from "@/components/student-dashboard/tabs";
import { AssignmentCard } from "@/components/student-dashboard/assignment-card";
import { InstructorCard } from "@/components/student-dashboard/instructor-card";
import { PointsChart } from "@/components/student-dashboard/points-chart";
import { TimeSpendingChart } from "@/components/student-dashboard/time-spending-chart";
import { 
  BookOpen, 
  ClipboardCheck, 
  GraduationCap,
  Search,
  ChevronLeft,
  Menu 
} from "lucide-react";
import { useState as useHookState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const timeSpendingData = [
  { day: "دو", hours: 4 },
  { day: "سه", hours: 12 },
  { day: "چهار", hours: 8 },
  { day: "پنج", hours: 6 },
  { day: "جمعه", hours: 10 },
  { day: "شنبه", hours: 2 },
  { day: "یک", hours: 3 },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "yearly">("weekly");
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="flex h-screen overflow-hidden bg-halloween-base100 text-halloween-baseContent">
      {(!isMobile || menuOpen) && (
        <div 
          className={`${isMobile ? 'fixed inset-0 z-30 bg-halloween-base100' : 'relative'}`}
        >
          <Sidebar onClose={isMobile ? () => setMenuOpen(false) : undefined} />
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto">
        <div className="py-4 px-4 md:py-6 md:px-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {isMobile && (
                <button 
                  onClick={() => setMenuOpen(!menuOpen)} 
                  className="p-1 text-halloween-baseContent"
                >
                  <Menu size={24} />
                </button>
              )}
              <div>
                <h2 className="text-halloween-baseContent/70 text-sm md:text-base">!خوش برگشتی</h2>
                <h1 className="text-xl md:text-3xl font-bold mt-0.5">منهاج الاسلام</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-halloween-baseContent/50" size={18} />
                <input 
                  type="text" 
                  placeholder="جستجوی دوره‌ها" 
                  className="pr-10 pl-4 py-2 bg-halloween-base200 border border-halloween-base300 rounded-lg w-[260px] text-sm focus:outline-none focus:ring-1 focus:ring-halloween-primary"
                />
              </div>
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full overflow-hidden">
                <img src="/avatar-1.png" alt="کاربر" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-8">
            <StatsCard 
              title="دوره‌های ثبت‌نام شده" 
              value="۱۲" 
              icon={BookOpen}
            />
            <StatsCard 
              title="آزمون‌های گرفته شده" 
              value="۱۷" 
              icon={ClipboardCheck}
            />
            <StatsCard 
              title="تکمیل شده" 
              value="۲۵" 
              icon={GraduationCap}
            />
          </div>
          
          {/* Courses */}
          <div className="mt-6 md:mt-8">
            <Tabs 
              tabs={["دوره‌های ثبت‌نام شده", "در حال انجام", "درس‌های پیش رو"]} 
              activeTab={activeTab} 
              onChange={setActiveTab}
            />
            
            <div className="mt-4 space-y-3">
              <CourseCard 
                title="همه چیز درباره هوش مصنوعی" 
                instructor="استیو هارلی" 
                progress={75} 
                totalLessons={12} 
                completedLessons={9}
              />
              <CourseCard 
                title="همه چیز درباره هوش مصنوعی" 
                instructor="استیو هارلی" 
                progress={25} 
                totalLessons={12} 
                completedLessons={3}
              />
              <CourseCard 
                title="همه چیز درباره هوش مصنوعی" 
                instructor="استیو هارلی" 
                progress={50} 
                totalLessons={12} 
                completedLessons={6}
              />
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            {/* Time Spending */}
            <div className="bg-halloween-base200 rounded-xl p-4 md:p-5 col-span-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-semibold">زمان صرف شده</h3>
                <div className="flex items-center space-x-2">
                  <button 
                    className={`px-2 py-1 text-xs rounded-full ${timeFrame === 'daily' ? 'bg-halloween-base300' : ''}`}
                    onClick={() => setTimeFrame('daily')}
                  >
                    روزانه
                  </button>
                  <button 
                    className={`px-2 py-1 text-xs rounded-full ${timeFrame === 'weekly' ? 'bg-halloween-primary text-halloween-primaryContent' : ''}`}
                    onClick={() => setTimeFrame('weekly')}
                  >
                    هفتگی
                  </button>
                  <button 
                    className={`px-2 py-1 text-xs rounded-full ${timeFrame === 'yearly' ? 'bg-halloween-base300' : ''}`}
                    onClick={() => setTimeFrame('yearly')}
                  >
                    سالانه
                  </button>
                </div>
              </div>
              
              <TimeSpendingChart 
                data={timeSpendingData} 
                timeFrame={timeFrame}
              />
            </div>
            
            {/* Assignments */}
            <div className="bg-halloween-base200 rounded-xl p-4 md:p-5 col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">تکالیف</h3>
                <a href="#" className="text-sm flex items-center text-halloween-primary">
                  مشاهده همه <ChevronLeft size={16} />
                </a>
              </div>
              
              <div className="space-y-1">
                <AssignmentCard
                  title="تأثیر هوش مصنوعی بر عملیات تجاری"
                  instructor="مایکل هدز"
                  deadline="۱۲ مرداد ۱۴۰۳"
                  status="due"
                />
                <AssignmentCard
                  title="تأثیر هوش مصنوعی بر عملیات تجاری"
                  instructor="مایکل هدز"
                  deadline="۱۲ مرداد ۱۴۰۳"
                  status="completed"
                />
              </div>
            </div>
            
            {/* Instructors & Points */}
            <div className="flex flex-col gap-4 md:gap-6 col-span-1">
              {/* Instructors */}
              <div className="bg-halloween-base200 rounded-xl p-4 md:p-5 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">استادان</h3>
                </div>
                
                <div>
                  <InstructorCard
                    name="جکسون مارتینز"
                    course="اصول بازاریابی دیجیتال"
                    avatarUrl="/avatar-jackson.png"
                    className="mb-2"
                  />
                  <InstructorCard
                    name="الیویا جانسون"
                    course="دوره تسلط بر سئو"
                    avatarUrl="/avatar-olivia.png"
                    className="mb-2"
                  />
                  <InstructorCard
                    name="جیمز دیویس"
                    course="بازاریابی دیجیتال برای مبتدیان"
                    avatarUrl="/avatar-james.png"
                  />
                </div>
              </div>
              
              {/* Points Chart */}
              <div className="bg-halloween-base200 rounded-xl p-4 md:p-5 flex-1">
                <div className="mb-2">
                  <h3 className="font-semibold">نمودار امتیازات</h3>
                </div>
                <div className="relative">
                  <PointsChart 
                    coursePoints={45} 
                    taskPoints={35} 
                    assignmentPoints={20}
                  />
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">امتیاز دوره:</span>
                    <span className="text-sm text-halloween-primary font-medium">٪۴۵</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">امتیاز تکالیف:</span>
                    <span className="text-sm text-halloween-accent font-medium">٪۳۵</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">امتیاز تمرین‌ها:</span>
                    <span className="text-sm text-halloween-info font-medium">٪۲۰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
