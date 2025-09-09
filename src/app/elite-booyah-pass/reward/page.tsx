"use client";
import Ads from "@/app/extra/Ads";
// app/tools/page.tsx
import BackHeader from "../../BackHeader";
import Link from "next/link";
import Image from "next/image";
// import RewardedAd from "../../extra/RewardedAd";

export default function rewardPage() {
  const tools = [
    { name: "Weapon Skins", name2: "Custom designs for weapons" },
    { name: "Vehicle Skins", name2: "Unique styles for in-game vehicles" },
    { name: "Emotes", name2: "Special animations or dance" },
    { name: "Backpack Skins", name2: "Stylish designs for backpacks" },
    { name: "Pet Skins", name2: "Exclusive looks for pets" },
    { name: "Outfits", name2: "Special character costumes" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Reward" />

      <Ads />

      {/* Reward Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">🎁 Free Fire Rewards</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Free Fire rewards system offers various items and skins to enhance your gameplay experience. Unlock exclusive content through gameplay achievements and special events.
          </p>
        </div>
      </div>

      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-no-repeat bg-black py-4 ps-3 pe-5 overflow-hidden rounded-xl"
          style={{
            backgroundImage: 'url("/resources/elite-bg.png")',
            backgroundSize: "100% 100%",
          }}
        >
          <Link href="/players">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="text-[#A8C5F3] text-lg leading-6 font-bold">
                  {tool.name}
                </div>
                <div className="text-xs text-white font-semibold">
                  {tool.name2}
                </div>
              </div>
              <Image
                className="object-contain w-[91px] cursor-pointer"
                alt="booyah-button"
                src="/resources/reward-btn.png"
                width={91}
                height={40}
                unoptimized
              />
            </div>
          </Link>
        </div>
      ))}

      {/* Free Fire Rewards Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 p-4 rounded-lg border border-emerald-500/30">
          <h3 className="text-white font-bold text-lg mb-3">🎁 Free Fire Reward System</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire reward system provides players with various ways to earn exclusive items, skins, and content through gameplay achievements and special events. Rewards include weapon skins, vehicle skins, emotes, backpack skins, pet skins, and special character outfits.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Players can earn rewards through daily missions, weekly challenges, seasonal events, and special tournaments. Each reward type offers unique benefits and customization options that enhance your character&apos;s appearance and gameplay experience.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Weapon skins provide visual enhancements and sometimes special effects, while vehicle skins allow you to customize your transportation in the game. Emotes add personality to your character, and backpack skins offer both style and functionality.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Pet skins and character outfits are among the most sought-after rewards, offering unique appearances that set you apart from other players. These rewards are often limited-time exclusives that showcase your dedication and achievements in the game.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Free Fire reward system encourages active gameplay and provides continuous motivation for players to improve their skills and participate in various game modes. Earn rewards, customize your character, and showcase your achievements in the ultimate battle royale experience!
          </p>
        </div>
      </div>
    </div>
  );
}
