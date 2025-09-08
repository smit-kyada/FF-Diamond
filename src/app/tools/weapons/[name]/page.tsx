// app/tools/weapons/[name]/page.tsx
 
import BackHeader from "../../../BackHeader";
import "../../../success/sucess.css";
import WeaponMap from "@/app/extra/WeaponMap";
import Ads from "@/app/extra/Ads";
// import RewardedAd from "../../../extra/RewardedAd";

const data: Record<string, { name: string }[]> = {
  launcher: [{ name: "RGS50" }, { name: "MGL140" }, { name: "M79" }],
  machinegun: [
    { name: "GATLING" },
    { name: "M60" },
    { name: "M249" },
    { name: "KORD" },
  ],
  submachinegun: [
    { name: "CG15" },
    { name: "P90" },
    { name: "VECTOR" },
    { name: "THOMPSON" },
    { name: "MP40" },
    { name: "UMP" },
    { name: "MP5" },
    { name: "VSS" },
    { name: "MAC10" },
    { name: "BIZON" },
  ],
  melee: [
    { name: "BASEBALLPOLE" },
    { name: "FFKNIFE" },
    { name: "KATANA" },
    { name: "MACHETE" },
    { name: "SICKLE" },
    { name: "PAN" },
  ],
  rifle: [
    { name: "SHIELDGUN" },
    { name: "TREATMENT LASER GUN" },
    { name: "AN94" },
    { name: "XM8" },
    { name: "FAMAS" },
    { name: "M4A1" },
    { name: "AK47" },
    { name: "GROZA" },
    { name: "M14" },
    { name: "SCAR" },
    { name: "PLASMA" },
    { name: "AUG" },
    { name: "PARAFAL" },
    { name: "KINGFISHAR" },
    { name: "G36" },
  ],
  pistol: [
    { name: "USP" },
    { name: "G18" },
    { name: "DESERTEAGLE" },
    { name: "HANDCANNON" },
    { name: "FGL-24" },
    { name: "HEALINGPISTOL" },
    { name: "M500" },
    { name: "M1873" },
    { name: "M1917" },
    { name: "USP-2" },
    { name: "UZI" },
    { name: "FLAMETHROWER" },
  ],
  shotgun: [
    { name: "TROGON" },
    { name: "SPAS12" },
    { name: "M1014" },
    { name: "M1887" },
    { name: "MAG-7" },
    { name: "CHARGE-BUSTER" },
  ],
  bow: [{ name: "CROSSBOW" }],
  sniper: [
    { name: "VSK94" },
    { name: "KAR98K" },
    { name: "AWM" },
    { name: "M82B" },
    { name: "HEALINGSNIPER" },
    { name: "M24" },
  ],
  projectiles: [
    { name: "GLOOMELTER" },
    { name: "GRENADE" },
    { name: "SMOKEGRENADE" },
    { name: "GLOOWALL" },
    { name: "FLASHFREEZE" },
  ],
  marksmanrifle: [
    { name: "SVD" },
    { name: "SKS" },
    { name: "WOODPECKER" },
    { name: "AC80" },
  ],
};

export function generateStaticParams() {
  return Object.keys(data).map((name) => ({ name }));
}

// This is now a server component!
export default async function WeaponCategoryPage({
  params,
}: {
  params: Promise<{ name: keyof typeof data }>;
}) {
  const { name } = await params;
  const weapons = data[name] || [];
  return (
    <>
      <div className="max-w-[390px] mx-auto pt-24 flex flex-col gap-4 pb-10">
        {/* <RewardedAd /> */}
        <BackHeader title={name.toUpperCase()} />

        <Ads />

        <div className="grid grid-cols-2 gap-4">
          {weapons.map((weapon) => (
            <div key={weapon.name}> 
            <WeaponMap weapon={weapon.name} name={name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
