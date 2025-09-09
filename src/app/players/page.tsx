"use client";
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
// import RewardedAd from "../extra/RewardedAd";

export default function PlayersPage() {
  const tools = [
    { name: "Pro Players", image: "/resources/characters/kairos.png" },
    { name: "Casual Players", image: "/resources/characters/orion.png" },
    { name: "Mix Players", image: "/resources/characters/luna.png" },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Players" />

      <Ads />

      {/* Players Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">👥 Free Fire Player Types</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Free Fire attracts millions of players worldwide, each with their own unique playstyle and approach to the game. Understanding different player types helps you adapt your strategy and improve your gameplay experience.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {tools.map((tool) => (
          <Link key={tool.name} href="/level">
            <div className="flex justify-between items-center border border-white/50 bg-white/15 backdrop-blur-[6px] px-5 rounded-2xl cursor-pointer">
              <div className="text-white text-lg font-semibold leading-6 py-3.5">
                {tool.name}
              </div>
              <img alt={tool.name} className="w-[50px]" src={tool.image} />
            </div>
          </Link>
        ))}
      </div>

      {/* Free Fire Player Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
          <h3 className="text-white font-bold text-lg mb-3">🎮 Free Fire Player Community</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire community consists of diverse players from around the world, each bringing their own skills and strategies to the battlefield. Pro players showcase incredible mechanical skills and game sense, while casual players enjoy the fun and excitement of battle royale gameplay.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Mix players combine elements of both competitive and casual play, adapting their style based on the situation. They balance aggressive pushes with strategic positioning, making them versatile opponents who can surprise you with unexpected tactics.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Understanding different player types helps you predict enemy behavior and develop counter-strategies. Pro players often use advanced techniques like quick-scoping and advanced movement, while casual players might focus more on survival and exploration.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire community is known for its creativity and innovation, with players constantly discovering new strategies, weapon combinations, and character synergies. Whether you're a competitive player aiming for the top ranks or a casual player enjoying the game with friends, there's always something new to learn and master.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Join the vibrant Free Fire community and discover your own unique playstyle. Whether you prefer aggressive combat, strategic positioning, or supportive teamwork, Free Fire offers endless opportunities for growth and improvement in the ultimate battle royale experience!
          </p>
        </div>
      </div>
    </div>
  );
}
