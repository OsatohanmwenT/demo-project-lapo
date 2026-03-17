import { AlignJustify, ChevronDown, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardTopbar() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-[#E8F0F7] bg-white px-6">
      <Button
        variant="ghost"
        size="icon"
        className="-ml-1 shrink-0 text-gray-400"
      >
        <AlignJustify size={20} />
      </Button>

      <div className="relative max-w-85 flex-1">
        <Search
          size={14}
          className="absolute top-1/2 left-3.5 -translate-y-1/2 text-gray-400"
        />
        <Input
          placeholder="Search"
          className="h-9 rounded-full border-[#DFEAF2] bg-[#F6FAFD] pl-9 text-sm focus-visible:ring-blue-400"
        />
      </div>

      <div className="ml-auto flex items-center gap-2.5">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://i.pravatar.cc/40?img=47" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-gray-800">John Smith</p>
          <p className="text-[11px] text-gray-400">Admin</p>
        </div>
        <ChevronDown size={13} className="text-gray-400" />
      </div>
    </header>
  );
}
