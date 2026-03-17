"use client";

import { Pencil } from "lucide-react";
import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { Field, TInput, TSelect } from "@/components/dashboard/form-controls";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function BasicInformationTab() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (photo) {
        URL.revokeObjectURL(photo);
      }
    };
  }, [photo]);

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const url = URL.createObjectURL(file);
    setPhoto((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      return url;
    });
  };

  return (
    <div className="grid gap-5 md:grid-cols-[96px_1fr_1fr]">
      <div className="flex items-start justify-start md:pt-1">
        <div className="relative">
          <Avatar className="h-21 w-21 border-2 border-[#DFEAF2]">
            <AvatarImage
              src={photo ?? "https://i.pravatar.cc/84?img=5"}
              alt="Student"
            />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <Button
            type="button"
            size="icon-xs"
            onClick={() => fileRef.current?.click()}
            className="absolute right-0.5 bottom-0.5 h-6 w-6 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700"
          >
            <Pencil size={11} />
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhoto}
          />
        </div>
      </div>

      <div className="grid gap-5 md:col-span-2 md:grid-cols-2">
        <Field label="First Name">
          <TInput placeholder="Charlene Reed" />
        </Field>
        <Field label="Last Name">
          <TInput placeholder="Charlene Reed" />
        </Field>

        <div className="grid grid-cols-2 gap-5">
          <Field label="Class">
            <TSelect
              placeholder="10"
              options={["9", "10", "11", "12"].map((v) => ({
                value: v,
                label: v,
              }))}
            />
          </Field>
          <Field label="Section">
            <TSelect
              placeholder="Niharika"
              options={[
                { value: "niharika", label: "Niharika" },
                { value: "a", label: "A" },
                { value: "b", label: "B" },
              ]}
            />
          </Field>
        </div>
        <Field label="Date of Birth">
          <TSelect
            placeholder="25 January 1990"
            options={[
              { value: "1990-01-25", label: "25 January 1990" },
              { value: "1991-03-12", label: "12 March 1991" },
            ]}
          />
        </Field>

        <Field label="Phone Number">
          <TInput placeholder="+8801750000125" />
        </Field>
        <Field label="Gender">
          <TSelect
            placeholder="Female"
            options={[
              { value: "female", label: "Female" },
              { value: "male", label: "Male" },
              { value: "other", label: "Other" },
            ]}
          />
        </Field>

        <Field label="Present Address">
          <TInput placeholder="125/A, Paltan Road, Dhaka" />
        </Field>
        <Field label="Email">
          <TInput placeholder="charlenereed@gmail.com" type="email" />
        </Field>

        <Field label="Permanent Address">
          <TInput placeholder="San Jose, California, USA" />
        </Field>
        <Field label="City">
          <TInput placeholder="San Jose" />
        </Field>

        <Field label="Postal Code">
          <TInput placeholder="45962" />
        </Field>
        <Field label="Country">
          <TInput placeholder="Bangladesh" />
        </Field>
      </div>
    </div>
  );
}
