import Image from "next/image";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <div className="flex h-screen">
      <div className="hidden w-[48%] flex-col gap-8 justify-center items-center bg-[#d6ecf8] px-12 py-10 lg:flex">
        <div>
          <p className="text-2xl font-semibold text-[#4a8fa8]">Welcome to</p>
          <p className="mt-0.5 text-2xl font-bold text-[#1a3d4f]">
            QTech Sheba{" "}
            <span className="font-semibold text-[#4a8fa8]">
              - Where Innovation Meets Ambition
            </span>
          </p>
        </div>

        <Image
          src="/illustration.png"
          alt="QTech Sheba illustration"
          width={558}
          height={370}
          className="object-contain"
          sizes="360px"
          priority
        />

        <p className="text-center text-xl font-semibold text-[#4a8fa8]">
          quorsotech@gmail.com
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center bg-white px-6 py-12">
        <div className="flex w-full max-w-100 flex-col items-center">
          <Image
            src="/Logo.svg"
            alt="QTech Sheba logo"
            width={56}
            height={56}
            className="object-contain"
            priority
          />

          <h1 className="mt-6 text-center text-[28px] leading-tight font-semibold text-gray-900">
            {title}
          </h1>
          <p className="mt-2 text-center text-sm text-gray-500">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}
