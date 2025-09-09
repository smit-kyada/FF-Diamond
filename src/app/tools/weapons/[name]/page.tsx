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
        {/* Weapon Category Information */}
        <div className="px-4 mb-4">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-4 rounded-lg border border-red-500/30">
            <h3 className="text-white font-bold text-lg mb-3">🔫 {name.toUpperCase()} Weapons</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              The {name} category in Free Fire offers specialized weapons designed for specific combat situations. Each weapon type has unique characteristics that make them effective in different scenarios.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {name === 'rifle' && 'Assault rifles provide balanced damage and range, perfect for mid-range combat. They offer good accuracy and moderate fire rates, making them versatile weapons for most situations.'}
              {name === 'sniper' && 'Sniper rifles excel at long-range eliminations with devastating headshot damage. They require precision and patience but can eliminate enemies from great distances.'}
              {name === 'shotgun' && 'Shotguns dominate close-quarters combat with high damage at short range. They are perfect for aggressive playstyles and indoor battles.'}
              {name === 'pistol' && 'Pistols are reliable sidearms with good mobility and decent damage. They are perfect for finishing off enemies or when primary weapons run out of ammo.'}
              {name === 'submachinegun' && 'SMGs offer high fire rates and excellent mobility, perfect for aggressive close-range combat and fast-paced gameplay.'}
              {name === 'machinegun' && 'Machine guns provide sustained fire with high damage output, ideal for suppressing enemies and controlling areas.'}
              {name === 'melee' && 'Melee weapons offer silent eliminations and are perfect for stealth gameplay or when ammunition is scarce.'}
              {name === 'launcher' && 'Launchers provide explosive damage and area control, perfect for destroying vehicles and groups of enemies.'}
              {name === 'bow' && 'Bows offer silent long-range attacks with good damage, perfect for stealth eliminations without alerting nearby enemies.'}
              {name === 'projectiles' && 'Projectile weapons provide tactical advantages with grenades, smoke, and special effects to control the battlefield.'}
              {name === 'marksmanrifle' && 'Marksman rifles bridge the gap between assault rifles and sniper rifles, offering good range and damage for medium to long-range combat.'}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Master the {name} weapon category to gain tactical advantages in Free Fire. Understanding weapon characteristics and choosing the right loadout for your playstyle will give you the edge in battle!
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
}
