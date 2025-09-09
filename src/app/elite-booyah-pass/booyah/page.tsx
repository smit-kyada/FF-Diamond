"use client";
import Ads from "@/app/extra/Ads";
// app/tools/page.tsx
import BackHeader from "../../BackHeader";
import Link from "next/link";
import Image from "next/image";
// import RewardedAd from "../../extra/RewardedAd";

export default function booyahPage() {
  const tools = [
    { name: "Exclusive Skins", name2: "Special character costumes" },
    { name: "Weapon Skins", name2: "Custom designs for weapons" },
    { name: "Vehicle Skins", name2: "Unique styles for in-game vehicles" },
    { name: "Emotes", name2: "Special animations or dance" },
    { name: "Backpack Skins", name2: "Stylish designs for backpacks" },
    { name: "Pet Skins", name2: "Exclusive looks for pets" },
    { name: "Profile Decorations", name2: "Avatars, banners & backgrounds" },
    { name: "BOOYAH Crates", name2: "Mystery crates exclusive item" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Booyah" />

      <Ads />

      {/* Booyah Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">🎉 Free Fire Booyah Pass</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Booyah Pass offers exclusive rewards and premium content for Free Fire players. Unlock special skins, emotes, and unique items that showcase your dedication to the game.
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
                src="/resources/booyah-btn.png"
                width={91}
                height={40}
                unoptimized
              />
            </div>
          </Link>
        </div>
      ))}

      {/* Free Fire Booyah Pass Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 rounded-lg border border-cyan-500/30">
          <h3 className="text-white font-bold text-lg mb-3">🎉 Free Fire Booyah Pass Rewards</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire Booyah Pass is a premium battle pass system that offers exclusive rewards and content for dedicated players. Each season brings new challenges, missions, and unique items that can only be obtained through the Booyah Pass.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Booyah Pass rewards include exclusive character skins, weapon skins, vehicle skins, emotes, backpack skins, pet skins, and profile decorations. These items are designed to make your character stand out and showcase your achievements in the game.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The pass system works through a progression mechanism where players complete daily and weekly missions to earn experience points and unlock rewards. Higher tiers offer more exclusive and valuable items, including legendary skins and special effects.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Booyah Crates are special mystery boxes that contain exclusive items and can only be obtained through the Booyah Pass. These crates offer a chance to win rare and legendary items that are not available through any other means in the game.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Booyah Pass provides excellent value for players who want to enhance their Free Fire experience with exclusive content. Each season brings fresh challenges and rewards, ensuring that the pass remains exciting and rewarding for all players!
          </p>
        </div>
      </div>
    </div>
  );
}
