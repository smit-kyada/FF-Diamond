"use client";
// app/tools/page.tsx
 
import BackHeader from "../../BackHeader";
import Ads from "@/app/extra/Ads";
import Link from "next/link";
import Image from "next/image";
// import RewardedAd from "../../extra/RewardedAd";

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
      {/* <RewardedAd /> */}
      <BackHeader title="Diamonds" />

      <Ads />

      {/* Diamonds Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-lg border border-pink-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">💎 Free Fire Diamonds</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Free Fire diamonds are the premium currency that unlocks exclusive content and features. Each diamond package offers different amounts to help you access the game&apos;s most valuable items and experiences.
          </p>
        </div>
      </div>

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
                  <Image
                    className="size-[27px] object-contain"
                    alt="diamond"
                    src="/resources/heart.png"
                    width={27}
                    height={27}
                    unoptimized
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

      {/* Free Fire Diamonds Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
          <h3 className="text-white font-bold text-lg mb-3">💎 Free Fire Diamond Economy</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Free Fire diamonds are the most valuable currency in the game, providing access to exclusive content, premium items, and special features. Diamonds unlock the game&apos;s most sought-after character skins, weapon skins, and limited-time events.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The diamond system offers various packages ranging from small amounts for casual purchases to large bundles for dedicated players. Each package provides excellent value and can be used to purchase items from the premium store, participate in exclusive events, or access special game modes.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Diamonds can be used to purchase exclusive character bundles, legendary weapon skins, vehicle skins, emotes, and special event items. They also provide access to premium crates, lucky draws, and seasonal events that offer rare and unique rewards.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire diamond economy is designed to provide fair value for your investment, with regular promotions, bonus diamonds, and special offers that maximize your purchasing power. Players can also earn diamonds through gameplay achievements, daily missions, and special events.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Whether you&apos;re looking to customize your character with exclusive skins, acquire powerful weapon skins, or participate in limited-time events, Free Fire diamonds give you the ultimate flexibility to enhance your gaming experience and showcase your style on the battlefield!
          </p>
        </div>
      </div>
    </div>
  );
}
