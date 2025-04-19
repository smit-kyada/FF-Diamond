"use client";
// app/tools/page.tsx
 
import BackHeader from "../../BackHeader";
import Ads from "@/app/extra/Ads";
import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    { name: "100" },
    { name: "310" },
    { name: "520" },
    { name: "1060" },
    { name: "2180" },
    { name: "5600" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      <BackHeader title="Diamonds" />

      <Ads />

      <div className="grid grid-cols-2 justify-between mt-6 gap-x-9 gap-y-6">
        {tools.map((tool) => (
          <div key={tool.name}>
            <Link href="/players/">
              <div
                className="rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset",
                  background: "rgb(160, 29, 186)",
                }}
              >
                <div className="h-7">
                  <img
                    className="size-[27px] object-contain"
                    alt="diamond"
                    src="/resources/heart.png"
                  />
                </div>
                <div className="text-white text-xs font-medium mt-2.5">
                  Get Free Diamonds
                </div>
                <div className="mt-0.5 text-white text-[22px] font-medium leading-[29px]">
                  {tool.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
