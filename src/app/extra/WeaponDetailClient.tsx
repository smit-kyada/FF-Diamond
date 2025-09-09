"use client";

import BackHeader from "../BackHeader";
import Ads from "./Ads";
import Link from "next/link";

interface WeaponDetailClientProps {
  item: string;
  category: string;
  url: string;
}

export default function WeaponDetailClient({
  item,
  category,
  url,
}: WeaponDetailClientProps) {
  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      <BackHeader title={item} />
      <Ads />

      <div className="flex items-center justify-center px-5 pb-[20px]">
        <div>
          <img src={url} alt={item+category} className="max-h-48 max-w-full" />
        </div>
      </div>

      <div className="flex items-center justify-center pb-5">
        <div className="bg-[url('/resources/bg-details.png')] bg-no-repeat bg-cover bg-top px-6 pb-6 pt-7 rounded-3xl w-full">
          <Link href="/players">
            <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-700 via-purple-500 to-blue-400">
              <span className="text-white text-lg leading-6 font-bold text-center">
                Apply Now
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* Weapon Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-4 rounded-lg border border-red-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">🔫 {item} Weapon Details</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The {item} is a powerful {category} weapon in Free Fire that offers unique advantages in combat. Each weapon in Free Fire has distinct characteristics including damage, range, fire rate, and reload speed.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            {category === 'rifle' && 'This assault rifle provides balanced performance for mid-range combat with good accuracy and moderate fire rate.'}
            {category === 'sniper' && 'This sniper rifle excels at long-range eliminations with devastating damage and precision accuracy.'}
            {category === 'shotgun' && 'This shotgun dominates close-quarters combat with high damage at short range.'}
            {category === 'pistol' && 'This pistol is a reliable sidearm with good mobility and decent damage for finishing off enemies.'}
            {category === 'submachinegun' && 'This SMG offers high fire rate and excellent mobility for aggressive close-range combat.'}
            {category === 'machinegun' && 'This machine gun provides sustained fire with high damage output for area control.'}
            {category === 'melee' && 'This melee weapon offers silent eliminations and is perfect for stealth gameplay.'}
            {category === 'launcher' && 'This launcher provides explosive damage and area control for destroying vehicles and groups.'}
            {category === 'bow' && 'This bow offers silent long-range attacks with good damage for stealth eliminations.'}
            {category === 'projectiles' && 'This projectile weapon provides tactical advantages with special effects to control the battlefield.'}
            {category === 'marksmanrifle' && 'This marksman rifle bridges assault rifles and sniper rifles with good range and damage.'}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Master the {item} to gain tactical advantages in Free Fire. Understanding weapon characteristics and choosing the right attachments will give you the edge in battle!
          </p>
        </div>
      </div>

      
    </div>
  );
}
