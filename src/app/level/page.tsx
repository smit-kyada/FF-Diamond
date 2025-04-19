"use client";
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";

export default function LevelPage() {
  const tools = [
    { name: "0 - 25" },
    { name: "26 - 40" },
    { name: "41 - 50" },
    { name: "51 - 60" },
    { name: "61 - 70" },
    { name: "70+" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      <BackHeader title="Level" />

      <Ads />

      <div className="flex flex-col gap-4">
        {tools.map((tool) => (
          <Link key={tool.name} href="/apply">
            <div className="flex justify-center text-center border border-white/50 bg-white/15 backdrop-blur-[6px] px-5 rounded-2xl cursor-pointer">
              <div className="text-white text-lg text-center font-semibold leading-6 py-3.5">
                {tool.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
