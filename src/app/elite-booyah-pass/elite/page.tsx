"use client";
// app/tools/page.tsx
 
import BackHeader from "../../BackHeader";
import Ads from "@/app/extra/Ads";
import Link from "next/link";
import Image from "next/image";
// import RewardedAd from "../../extra/RewardedAd";

export default function elitePage() {
  const tools = [
    { name: "Exclusive Skins", name2: "Unique character outfits" },
    { name: "Accessories", name2: "Backpacks, hats, masks, and more" },
    { name: "Emotes", name2: "Special dance moves and gestures" },
    { name: "Vehicle Skins", name2: "Custom vehicles for in-game" },
    { name: "Pet Skins", name2: "Stylish looks for pets" },
    { name: "Vouchers", name2: "Free spins for Luck Royale." },
    { name: "Avatars and Banners", name2: "Personalized profile decorations" },
    { name: "Tokens", name2: "Used to redeem exclusive rewards" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Elite" />

      <Ads />

      {/* Elite Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">👑 Free Fire Elite Pass</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Elite Pass provides premium rewards and exclusive content for Free Fire players. Access special skins, accessories, and unique items that demonstrate your elite status in the game.
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
          <Link href="/players/">
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
                alt="elite-button"
                src="/resources/elite-btn.png"
                width={91}
                height={40}
                unoptimized
              />
            </div>
          </Link>
        </div>
      ))}

      {/* Free Fire Elite Pass Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
          <h3 className="text-white font-bold text-lg mb-3">👑 Free Fire Elite Pass Benefits</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire Elite Pass is a premium subscription service that offers exclusive rewards and benefits for dedicated players. Elite Pass holders gain access to special content, exclusive items, and unique features that enhance their gaming experience.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Elite Pass rewards include exclusive character skins, accessories like backpacks and hats, special emotes, vehicle skins, pet skins, vouchers for Luck Royale, personalized avatars and banners, and tokens for redeeming exclusive rewards.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Elite Pass system provides a comprehensive progression experience where players unlock rewards through gameplay and achievements. Each tier offers increasingly valuable items, with the highest tiers providing legendary skins and exclusive effects.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Elite Pass holders also receive special privileges such as priority access to new content, exclusive events, and special bonuses. The pass is designed to provide maximum value for players who want to enhance their Free Fire experience with premium content.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Elite Pass represents the ultimate Free Fire experience, offering exclusive content and benefits that showcase your dedication to the game. Join the elite community and unlock premium rewards that set you apart from other players!
          </p>
        </div>
      </div>
    </div>
  );
}
