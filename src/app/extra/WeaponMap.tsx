"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WeaponMap({
  weapon,
  name,
}: {
  weapon: string;
  name: string;
}) {
  const router = useRouter();

  const lowercasedWeapon = weapon.toLowerCase();
  const lowercasedCategory = name.toLowerCase();

  return (
    <div
      onClick={() => {
        const path = `/tools/weapon-details/${lowercasedCategory}/${lowercasedWeapon}`;
        router.push(path);
      }}
      className="flex cursor-pointer justify-center relative"
    >
      <div className="h-28 w-full bg-transparent relative z-20">
        <img
          className="h-full w-full object-contain bg-transparent"
          src={`/resources/weapons/${name}/${weapon}.png`}
          alt={weapon}
        />
      </div>
      <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>
      <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
        {weapon}
      </div>
    </div>
  );
}
