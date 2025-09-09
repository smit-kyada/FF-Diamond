'use client';
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
// import RewardedAd from "../extra/RewardedAd";

export default function ToolsPage() {
  
  const tools = [
    { name: "characters", image: "/resources/buttons/tool/charecter.png" },
    { name: "weapons", image: "/resources/buttons/tool/weapons.png" },
    { name: "pets", image: "/resources/buttons/tool/pets.png" },
    { name: "emotes", image: "/resources/buttons/tool/emotes.png" },
    {
      name: "diamonds",
      image: "/resources/buttons/tool/diamonds.png",
      path: "/free-diamonds-coin/diamonds",
    },
  ];

  return (
    
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Tools" />

      {/* Tools Description */}
      <div className="text-center px-4">
        <h2 className="text-xl font-bold text-white mb-2">Free Fire Tools</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Explore our collection of Free Fire tools to unlock characters, weapons, pets, and emotes. 
          Choose from different categories to enhance your gaming experience.
        </p>
      </div>

      <Ads />

      {tools.map((tool, index) => (
        <div
          key={tool.name}
          className={`flex items-center justify-center px-5 ${
            index === 2 ? "pt-[5px]" : ""
          } ${index === tools.length - 1 ? "pb-10" : ""}`}
        >
          <Link href={tool.path || `/tools/${tool.name}`}>
            <img src={tool.image} alt={tool.name} className="w-full" />
          </Link>
        </div>
      ))}

      {/* Free Fire Tools Information */}
      <div className="px-4 pt-8">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-blue-500/30">
          <h3 className="text-white font-bold text-lg mb-3">⚡ Free Fire Tools & Resources</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Our comprehensive Free Fire tools help you master the game with detailed information about characters, weapons, pets, and emotes. Each character in Free Fire has unique abilities that can turn the tide of battle.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            From Alok's healing ability to Chrono's time manipulation, understanding character skills is crucial for victory. Weapons range from close-combat shotguns to long-range sniper rifles, each with distinct damage, range, and fire rate statistics.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Pets provide valuable support with abilities like increased movement speed, armor protection, and healing bonuses. Emotes allow players to express themselves and can even be used strategically to distract opponents.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Master these tools and resources to climb the ranks, achieve Booyah victories, and become a Free Fire legend. Knowledge is power in the battle royale arena!
          </p>
        </div>
      </div>
    </div>
  );
}
