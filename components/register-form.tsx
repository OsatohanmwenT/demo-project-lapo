"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mt-8 w-full space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name<span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-blue-500"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="student-id" className="text-sm font-medium text-gray-700">
          Student ID<span className="text-red-500">*</span>
        </Label>
        <Input
          id="student-id"
          placeholder="Enter your student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="h-12 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-blue-500"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password<span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 rounded-md border-gray-300 pr-10 text-sm focus-visible:ring-blue-500"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-1 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
        <p className="text-xs text-gray-500">Must be at least 8 characters.</p>
      </div>

      <Button className="h-12 w-full rounded-md bg-[#0084D1] text-sm font-semibold tracking-wide text-white hover:bg-blue-700">
        Get started
      </Button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Button variant="link" className="h-auto p-0 font-semibold" asChild>
          <Link href="/login">Log in</Link>
        </Button>
      </p>
    </div>
  );
}
