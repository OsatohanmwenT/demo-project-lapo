import type { ReactNode } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const INPUT_CLS =
  "h-[50px] w-full rounded-[15px] border border-[#DFEAF2] bg-white text-sm text-gray-700 placeholder:text-[#B0C4D8] focus-visible:border-blue-400 focus-visible:ring-1 focus-visible:ring-blue-400";

export const SELECT_TRIGGER_CLS =
  "h-[50px] w-full rounded-[15px] border border-[#DFEAF2] bg-white text-sm text-[#B0C4D8] focus:ring-1 focus:ring-blue-400";

export type Option = {
  value: string;
  label: string;
};

type FieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

type TInputProps = {
  placeholder: string;
  type?: "text" | "email" | "password";
};

type TSelectProps = {
  placeholder: string;
  options: Option[];
};

export function Field({ label, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label className="text-[13px] font-medium text-gray-700">{label}</Label>
      {children}
    </div>
  );
}

export function TInput({ placeholder, type = "text" }: TInputProps) {
  return <Input type={type} placeholder={placeholder} className={INPUT_CLS} />;
}

export function TSelect({ placeholder, options }: TSelectProps) {
  return (
    <Select>
      <SelectTrigger className={SELECT_TRIGGER_CLS}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
