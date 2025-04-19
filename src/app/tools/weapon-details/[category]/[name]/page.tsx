import WeaponDetailClient from "../../../../extra/WeaponDetailClient"; // ← your new client component

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
    const allWeapons = [];
    for (const category in data) {
      for (const weapon of data[category]) {
        allWeapons.push({
          category,
          name: weapon.name.toLowerCase(),
        });
      }
    }
    return allWeapons;
  }

  export default async function WeaponDetailPage({
    params,
  }: {
    params: Promise<{ category: string; name: string }>;
  }) {
    const { category, name } = await params;
  
    // Find the original weapon name (case-sensitive match)
    const weapon = data[category]?.find((w) => w.name.toLowerCase() === name);
  
    if (!weapon) return <div>Weapon not found.</div>;
  
    // You can generate the image URL from name and category if it's predictable
    const imageUrl = `/resources/weapons/${category.toLowerCase()}/${name.toLowerCase()}.png`;
  
    return (
      <WeaponDetailClient
        item={weapon.name}
        category={category}
        url={imageUrl}
      />
    );
  }