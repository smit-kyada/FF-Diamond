"use client";
import Ads from "@/app/extra/Ads";
// app/tools/page.tsx
import BackHeader from "../../BackHeader";
import BackTools from "../BackTools";
import { useRouter } from "next/navigation";
// import RewardedAd from "../../extra/RewardedAd";

export default function WeaponsPage() {
  const router = useRouter();

  const tools = [
    { name: "launcher", image: "/resources/weapons-logos/launcher.png" },
    { name: "machinegun", image: "/resources/weapons-logos/machineGun.png" },
    {
      name: "submachinegun",
      image: "/resources/weapons-logos/subMachineGun.png",
    },
    { name: "melee", image: "/resources/weapons-logos/melee.png" },
    { name: "rifle", image: "/resources/weapons-logos/rifle.png" },
    { name: "pistol", image: "/resources/weapons-logos/pistol.png" },
    { name: "shotgun", image: "/resources/weapons-logos/shotGun.png" },
    { name: "bow", image: "/resources/weapons-logos/bow.png" },
    { name: "sniper", image: "/resources/weapons-logos/sniper.png" },
    { name: "projectiles", image: "/resources/weapons-logos/projectiles.png" },
    {
      name: "marksmanrifle",
      image: "/resources/weapons-logos/marksmanRifle.png",
    },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Weapons" />

      {/* Weapons Description */}
      <div className="text-center px-4">
        <h2 className="text-xl font-bold text-white mb-2">Free Fire Weapons</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Discover powerful weapons from different categories including rifles, snipers, shotguns, and more. 
          Each weapon has unique stats and characteristics to dominate the battlefield.
        </p>
      </div>

      <Ads />

      <div className="flex flex-col gap-4 pb-10">
        {tools.map((tool) => (
          <div key={tool.name}
            onClick={() => {
              const path = `/tools/weapons/${tool.name}?item=${tool.name}`;
              router.push(path);
            }}
          >
            <BackTools title={tool.name} image={tool.image} />
          </div>
        ))}
      </div>

      {/* Free Fire Weapons Information */}
      <div className="px-4 pt-8">
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-4 rounded-lg border border-red-500/30">
          <h3 className="text-white font-bold text-lg mb-3">🔫 Free Fire Weapons & Arsenal</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Free Fire offers a vast arsenal of weapons across multiple categories, each designed for different combat situations. From close-range shotguns to long-range sniper rifles, mastering weapon selection is key to survival.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Assault rifles like the M4A1 and AK47 provide balanced damage and range, perfect for mid-range combat. Sniper rifles such as the AWM and M24 excel at long-range eliminations with devastating headshot damage.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Shotguns like the M1014 and SPAS12 dominate close-quarters combat, while SMGs offer high fire rates for aggressive playstyles. Each weapon has unique stats including damage, range, fire rate, and reload speed.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Weapon attachments like scopes, silencers, and extended magazines can significantly improve performance. Understanding weapon characteristics and choosing the right loadout for your playstyle will give you the edge in battle!
          </p>
        </div>
      </div>
    </div>
  );
}
