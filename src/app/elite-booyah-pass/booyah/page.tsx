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
    </div>
  );
}
