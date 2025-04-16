
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
  ChevronRight 
} from "lucide-react";

const timeSpendingData = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 12 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 10 },
  { day: "Sat", hours: 2 },
  { day: "Sun", hours: 3 },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "yearly">("weekly");
  
  return (
    <div className="flex h-screen overflow-hidden bg-halloween-base100 text-halloween-baseContent">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 px-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-halloween-baseContent/70">Welcome Back!</h2>
              <h1 className="text-3xl font-bold mt-1">Minhajul Islam</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-halloween-baseContent/50" size={18} />
                <input 
                  type="text" 
                  placeholder="Search for courses" 
                  className="pl-10 pr-4 py-2 bg-halloween-base200 border border-halloween-base300 rounded-lg w-[260px] text-sm focus:outline-none focus:ring-1 focus:ring-halloween-primary"
                />
              </div>
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src="/avatar-1.png" alt="User" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <StatsCard 
              title="Enrolled Courses" 
              value="12" 
              icon={BookOpen}
            />
            <StatsCard 
              title="Test Taken" 
              value="17" 
              icon={ClipboardCheck}
            />
            <StatsCard 
              title="Completed" 
              value="25" 
              icon={GraduationCap}
            />
          </div>
          
          {/* Courses */}
          <div className="mt-8">
            <Tabs 
              tabs={["Enrolled Courses", "In Progress", "Upcomings Lessons"]} 
              activeTab={activeTab} 
              onChange={setActiveTab}
            />
            
            <div className="mt-4 space-y-3">
              <CourseCard 
                title="Learn Everything About Artificial Intelligence" 
                instructor="Steve Harley" 
                progress={75} 
                totalLessons={12} 
                completedLessons={9}
              />
              <CourseCard 
                title="Learn Everything About Artificial Intelligence" 
                instructor="Steve Harley" 
                progress={25} 
                totalLessons={12} 
                completedLessons={3}
              />
              <CourseCard 
                title="Learn Everything About Artificial Intelligence" 
                instructor="Steve Harley" 
                progress={50} 
                totalLessons={12} 
                completedLessons={6}
              />
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            {/* Time Spending */}
            <div className="bg-halloween-base200 rounded-xl p-5 col-span-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Time Spendings</h3>
                <div className="flex items-center space-x-2">
                  <button 
                    className={`px-3 py-1 text-xs rounded-full ${timeFrame === 'daily' ? 'bg-halloween-base300' : ''}`}
                    onClick={() => setTimeFrame('daily')}
                  >
                    Daily
                  </button>
                  <button 
                    className={`px-3 py-1 text-xs rounded-full ${timeFrame === 'weekly' ? 'bg-halloween-primary text-halloween-primaryContent' : ''}`}
                    onClick={() => setTimeFrame('weekly')}
                  >
                    Weekly
                  </button>
                  <button 
                    className={`px-3 py-1 text-xs rounded-full ${timeFrame === 'yearly' ? 'bg-halloween-base300' : ''}`}
                    onClick={() => setTimeFrame('yearly')}
                  >
                    Yearly
                  </button>
                </div>
              </div>
              
              <TimeSpendingChart 
                data={timeSpendingData} 
                timeFrame={timeFrame}
              />
            </div>
            
            {/* Assignments */}
            <div className="bg-halloween-base200 rounded-xl p-5 col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Assignments</h3>
                <a href="#" className="text-sm flex items-center text-halloween-primary">
                  See All <ChevronRight size={16} />
                </a>
              </div>
              
              <div className="space-y-1">
                <AssignmentCard
                  title="The Impact Of Artificial Intelligence On Business Operations"
                  instructor="Michael Heds"
                  deadline="12 august 23"
                  status="due"
                />
                <AssignmentCard
                  title="The Impact Of Artificial Intelligence On Business Operations"
                  instructor="Michael Heds"
                  deadline="12 august 23"
                  status="completed"
                />
              </div>
            </div>
            
            {/* Instructors & Points */}
            <div className="flex flex-col gap-6 col-span-1">
              {/* Instructors */}
              <div className="bg-halloween-base200 rounded-xl p-5 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Instructors</h3>
                </div>
                
                <div>
                  <InstructorCard
                    name="Jackson Martinez"
                    course="Fundamentals of Digital Marketing"
                    avatarUrl="/avatar-jackson.png"
                    className="mb-2"
                  />
                  <InstructorCard
                    name="Olivia Johnson"
                    course="SEO Mastery Course"
                    avatarUrl="/avatar-olivia.png"
                    className="mb-2"
                  />
                  <InstructorCard
                    name="James Davis"
                    course="Digital marketing for beginners"
                    avatarUrl="/avatar-james.png"
                  />
                </div>
              </div>
              
              {/* Points Chart */}
              <div className="bg-halloween-base200 rounded-xl p-5 flex-1">
                <div className="mb-2">
                  <h3 className="font-semibold">Point Chart</h3>
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
                    <span className="text-sm">Points On Course:</span>
                    <span className="text-sm text-halloween-primary font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Points On Task:</span>
                    <span className="text-sm text-halloween-accent font-medium">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Points On Assignment:</span>
                    <span className="text-sm text-halloween-info font-medium">20%</span>
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
