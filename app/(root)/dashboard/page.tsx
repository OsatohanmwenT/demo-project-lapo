"use client";

import { useState } from "react";

import { Field, TInput } from "@/components/dashboard/form-controls";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { AdditionalDetailsTab } from "@/components/dashboard/tabs/additional-details-tab";
import { BasicInformationTab } from "@/components/dashboard/tabs/basic-information-tab";
import { ParentDetailsTab } from "@/components/dashboard/tabs/parent-details-tab";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function AddNewStudentPage() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="flex min-h-screen bg-[#F4F7FB]">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar />

        <main className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-[18px] font-bold text-gray-900">Add New Student</h1>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                className="h-9 rounded-full border-[#DFEAF2] bg-white px-6 text-[13px] font-medium text-gray-600 hover:bg-gray-50"
              >
                cancel
              </Button>
              <Button
                variant="outline"
                className="h-9 rounded-full border-[#DFEAF2] bg-white px-6 text-[13px] font-medium text-gray-600 hover:bg-gray-50"
              >
                reset
              </Button>
              <Button className="h-9 rounded-full bg-blue-600 px-7 text-[13px] font-semibold text-white hover:bg-blue-700">
                save
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E8F0F7] bg-white shadow-sm">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="h-auto w-full justify-start gap-6 rounded-none border-b border-[#E8F0F7] bg-transparent px-6 pt-5 pb-0">
                {[
                  { value: "basic", label: "Basic Information" },
                  { value: "parent", label: "Parent Details" },
                  { value: "additional", label: "Additional Details" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={cn(
                      "rounded-none border-b-2 bg-transparent px-0 pt-0 pb-3 text-[13.5px] font-medium shadow-none",
                      "data-active:border-blue-600 data-active:bg-transparent data-active:text-blue-600 data-active:shadow-none",
                      "data-inactive:border-transparent data-inactive:text-gray-400"
                    )}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="p-6">
                <TabsContent value="basic" className="mt-0">
                  <BasicInformationTab />
                </TabsContent>
                <TabsContent value="parent" className="mt-0">
                  <ParentDetailsTab />
                </TabsContent>
                <TabsContent value="additional" className="mt-0">
                  <AdditionalDetailsTab />
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="rounded-2xl border border-[#E8F0F7] bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-[14px] font-semibold text-gray-800">Login/Account Details</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="User Name">
                <TInput placeholder="Charlene Reed" />
              </Field>
              <Field label="Password">
                <TInput placeholder="**********" type="password" />
              </Field>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}