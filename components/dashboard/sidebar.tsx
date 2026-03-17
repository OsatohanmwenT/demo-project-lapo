import {
    BarChart2,
    Bell,
    Building2,
    CalendarDays,
    CheckSquare,
    ChevronDown,
    ClipboardCheck,
    GraduationCap,
    LayoutDashboard,
    LogOut,
    Settings,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", hasChevron: true },
  { icon: GraduationCap, label: "Teacher" },
  { icon: Users, label: "Student", active: true },
  { icon: Building2, label: "Departments" },
  { icon: Bell, label: "Notice" },
  { icon: ClipboardCheck, label: "Attendance" },
];

const pageItems = [
  { icon: BarChart2, label: "Exams" },
  { icon: CalendarDays, label: "Events" },
  { icon: CheckSquare, label: "To-Do" },
];

const bottomItems = [
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Logout" },
];

export function DashboardSidebar() {
  return (
    <aside className="hidden min-h-screen w-58 font-nunito-sans shrink-0 flex-col border-r border-[#E8F0F7] bg-white lg:flex">
      <div className="flex h-16 shrink-0 items-center gap-3 border-b border-[#E8F0F7] px-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1A3C6E]">
          <span className="text-[9px] leading-none font-bold text-white">
            SHK
          </span>
        </div>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[11.5px] font-bold text-gray-800">
            Shamsul Hoque Khan
          </p>
          <p className="truncate text-[11px] text-gray-500">
            School and College
          </p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col px-3 py-4">
        <p className="mb-1.5 px-3 text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
          Menu
        </p>
        {menuItems.map(({ icon: Icon, label, active, hasChevron }) => (
          <Button
            key={label}
            variant="ghost"
            className={cn(
              "relative mb-0.5 h-auto w-full justify-start gap-3 overflow-visible rounded-lg px-3 py-3 text-left text-[13px] font-medium",
              active
                ? "bg-[#0084D1] text-white hover:bg-blue-700 hover:text-white before:absolute before:top-1/2 before:-left-3 before:h-11 before:w-1.5 before:-translate-y-1/2 before:rounded-r-full before:bg-[#0084D1]"
                : "text-gray-600 hover:bg-[#F0F6FB]",
            )}
          >
            <Icon
              size={16}
              className={active ? "text-white" : "text-gray-400"}
            />
            <span className="flex-1">{label}</span>
            {hasChevron ? (
              <ChevronDown
                size={13}
                className={active ? "text-white/70" : "text-gray-300"}
              />
            ) : null}
          </Button>
        ))}

        <div className="my-3 border-t border-[#E8F0F7]" />

        <p className="mb-1.5 px-3 text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
          Pages
        </p>
        {pageItems.map(({ icon: Icon, label }) => (
          <Button
            key={label}
            variant="ghost"
            className="mb-0.5 h-auto w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-gray-600 hover:bg-[#F0F6FB]"
          >
            <Icon size={16} className="text-gray-400" />
            {label}
          </Button>
        ))}

        <div className="mt-auto border-t border-[#E8F0F7] pt-3">
          {bottomItems.map(({ icon: Icon, label }) => (
            <Button
              key={label}
              variant="ghost"
              className="mb-0.5 h-auto w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-gray-600 hover:bg-[#F0F6FB]"
            >
              <Icon size={16} className="text-gray-400" />
              {label}
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
