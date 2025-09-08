"use client";
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
// import RewardedAd from "../extra/RewardedAd";

export default function PlayersPage() {
  const tools = [
    { name: "Pro Players", image: "/resources/characters/kairos.png" },
    { name: "Casual Players", image: "/resources/characters/orion.png" },
    { name: "Mix Players", image: "/resources/characters/luna.png" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Players" />

      <Ads />

      <div className="flex flex-col gap-4">
        {tools.map((tool) => (
          <Link key={tool.name} href="/level">
            <div className="flex justify-between items-center border border-white/50 bg-white/15 backdrop-blur-[6px] px-5 rounded-2xl cursor-pointer">
              <div className="text-white text-lg font-semibold leading-6 py-3.5">
                {tool.name}
              </div>
              <img alt={tool.name} className="w-[50px]" src={tool.image} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
