"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mt-8 w-full space-y-5">
      <div className="space-y-1.5">
        <Label
          htmlFor="student-id"
          className="text-sm font-medium text-gray-700"
        >
          Student ID
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
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 rounded-md border-gray-300 pr-10 text-sm focus-visible:ring-blue-500"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2.5 right-1 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked === true)}
            className="rounded border-gray-300 data-checked:border-blue-600 data-checked:bg-blue-600"
          />
          <Label
            htmlFor="remember"
            className="cursor-pointer select-none text-sm text-gray-700"
          >
            Remember Me
          </Label>
        </div>
        <Button
          type="button"
          variant="link"
          className="h-auto p-0 text-sm font-medium text-blue-600"
        >
          Forgot password
        </Button>
      </div>

      <Button className="h-12 w-full rounded-md bg-[#0084D1] text-sm font-semibold tracking-wide text-white hover:bg-blue-700">
        Sign in
      </Button>

      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Button variant="link" className="h-auto p-0 font-semibold" asChild>
          <Link href="/register">Sign up</Link>
        </Button>
      </p>
    </div>
  );
}
