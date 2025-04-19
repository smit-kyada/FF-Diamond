"use client";
// app/tools/page.tsx
 
import BackHeader from "../../BackHeader";
import Ads from "@/app/extra/Ads";
import Link from "next/link";

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
      <BackHeader title="Elite" />

      <Ads />

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
              <img
                className="object-contain w-[91px] cursor-pointer"
                alt="elite-button"
                src="/resources/elite-btn.png"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
