"use client";
import Ads from "@/app/extra/Ads";
// app/tools/page.tsx
import BackHeader from "../../BackHeader";
import Link from "next/link";
// import RewardedAd from "../../extra/RewardedAd";

export default function ToolsPage() {
  const tools = [
    { name: "/resources/buttons/diamondCoin/COINS/coin-1.png" },
    { name: "/resources/buttons/diamondCoin/COINS/coin-2.png" },
    { name: "/resources/buttons/diamondCoin/COINS/coin-3.png" },
    { name: "/resources/buttons/diamondCoin/COINS/coin-4.png" },
    { name: "/resources/buttons/diamondCoin/COINS/coin-5.png" },
    { name: "/resources/buttons/diamondCoin/COINS/coin-6.png" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Coin" />

      <Ads />

      <div className="grid grid-cols-2 justify-between mt-6 gap-9">
        {tools.map((tool) => (
          <div key={tool.name}>
            <Link href="/players/">
              <div>
                <img
                  className="w-full object-contain"
                  alt="diamond"
                  src={tool.name}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
