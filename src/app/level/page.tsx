"use client";
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
// import RewardedAd from "../extra/RewardedAd";

export default function LevelPage() {
  const tools = [
    { name: "0 - 25" },
    { name: "26 - 40" },
    { name: "41 - 50" },
    { name: "51 - 60" },
    { name: "61 - 70" },
    { name: "70+" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Level" />

      <Ads />

      {/* Level Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">📈 Free Fire Player Levels</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Player levels in Free Fire represent your experience and progression in the game. Each level range offers different challenges and opportunities for growth, from beginner-friendly gameplay to advanced competitive matches.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {tools.map((tool) => (
          <Link key={tool.name} href="/apply">
            <div className="flex justify-center text-center border border-white/50 bg-white/15 backdrop-blur-[6px] px-5 rounded-2xl cursor-pointer">
              <div className="text-white text-lg text-center font-semibold leading-6 py-3.5">
                {tool.name}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Free Fire Level Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-500/30">
          <h3 className="text-white font-bold text-lg mb-3">🏆 Free Fire Progression System</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Free Fire's level system provides a clear progression path for players of all skill levels. Beginners (0-25) learn the basics of movement, shooting, and survival, while intermediate players (26-50) develop advanced strategies and weapon mastery.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Advanced players (51-70) focus on competitive gameplay, mastering complex techniques like quick-scoping, advanced movement, and team coordination. Elite players (70+) represent the top tier of Free Fire talent, showcasing incredible mechanical skills and game sense.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Each level range offers unique challenges and rewards. Lower levels provide a safe environment to learn and experiment, while higher levels demand precision, strategy, and quick decision-making. The progression system ensures that players are matched with opponents of similar skill levels.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Level progression in Free Fire is based on experience points gained through gameplay, eliminations, survival time, and match performance. Higher levels unlock exclusive rewards, including character skins, weapon skins, and special titles that showcase your achievements.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Whether you're just starting your Free Fire journey or aiming for the highest ranks, the level system provides clear goals and milestones to keep you motivated. Focus on improving your skills, learning from each match, and gradually climbing the ranks to become a Free Fire champion!
          </p>
        </div>
      </div>
    </div>
  );
}
