"use client";
import Ads from "@/app/extra/Ads";
// app/tools/page.tsx
import BackHeader from "../../BackHeader";
import BackTools from "../BackTools";
import { useRouter } from "next/navigation";
import RewardedAd from "../../extra/RewardedAd";

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
      <RewardedAd />
      <BackHeader title="Weapons" />

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
    </div>
  );
}
