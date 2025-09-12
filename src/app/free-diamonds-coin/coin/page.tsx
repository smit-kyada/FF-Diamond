"use client";
import Ads from "@/app/extra/Ads";
// app/tools/page.tsx
import BackHeader from "../../BackHeader";
import Link from "next/link";
import Image from "next/image";
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

      {/* Coin Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">🪙 Free Fire Coins</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Free Fire coins are valuable in-game currency that can be used to purchase various items, skins, and upgrades. Each coin package offers different amounts to suit your gaming needs and budget.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-between mt-6 gap-9">
        {tools.map((tool) => (
          <div key={tool.name}>
            <Link href="/players/">
              <div>
                <Image
                  className="w-full object-contain"
                  alt="diamond"
                  src={tool.name}
                  width={200}
                  height={200}
                  unoptimized
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Free Fire Coin Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 p-4 rounded-lg border border-amber-500/30">
          <h3 className="text-white font-bold text-lg mb-3">💰 Free Fire Currency System</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Free Fire coins are the primary premium currency in the game, allowing players to purchase exclusive items, character skins, weapon skins, and other premium content. Coins provide access to the game&apos;s most sought-after items and customization options.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The coin system offers various packages to accommodate different player needs and budgets. Smaller packages are perfect for casual players who want to make occasional purchases, while larger packages provide better value for dedicated players and content creators.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Coins can be used to purchase items from the in-game store, including character bundles, weapon skins, vehicle skins, emotes, and special event items. They also provide access to exclusive crates and lucky draws that offer rare and legendary items.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire economy is designed to provide fair value for your investment, with regular events and promotions that offer bonus coins or discounted prices. Players can also earn coins through gameplay achievements, daily missions, and special events.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Whether you&apos;re looking to customize your character, acquire powerful weapon skins, or participate in exclusive events, Free Fire coins give you the flexibility to enhance your gaming experience and stand out on the battlefield!
          </p>
        </div>
      </div>
    </div>
  );
}
