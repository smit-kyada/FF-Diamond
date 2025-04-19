"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[390px] sm:w-[360px] py-0 z-50">
      <div className="z-50 border-b border-b-[#E0E0E0] py-4 px-6 flex items-center justify-between sticky top-0 backdrop-blur bg-black bg-opacity-40">
        <svg
          onClick={() => router.back()}
          className="flex-shrink-0 cursor-pointer"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5019 12H3.67188"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-white text-lg leading-[26px] uppercase font-semibold">
          {title}
        </div>
        <Link href="/">
          <div className="flex items-center justify-center size-6 flex-shrink-0">
            <svg
              className="cursor-pointer"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M18.04 4.81969L12.28 0.789694C10.71 -0.310306 8.29999 -0.250306 6.78999 0.919694L1.77999 4.82969C0.77999 5.60969 -0.0100098 7.20969 -0.0100098 8.46969V15.3697C-0.0100098 17.9197 2.05999 19.9997 4.60999 19.9997H15.39C17.94 19.9997 20.01 17.9297 20.01 15.3797V8.59969C20.01 7.24969 19.14 5.58969 18.04 4.81969ZM10.75 15.9997C10.75 16.4097 10.41 16.7497 9.99999 16.7497C9.58999 16.7497 9.24999 16.4097 9.24999 15.9997V12.9997C9.24999 12.5897 9.58999 12.2497 9.99999 12.2497C10.41 12.2497 10.75 12.5897 10.75 12.9997V15.9997Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
}
