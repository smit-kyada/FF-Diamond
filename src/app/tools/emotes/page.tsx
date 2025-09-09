"use client";
// app/tools/page.tsx
 
import { useRouter } from "next/navigation";
import BackHeader from "@/app/BackHeader";
import "../../success/sucess.css";
import Ads from "@/app/extra/Ads";
// // import RewardedAd from "../../extra/RewardedAd";

export default function CharatersPage() {
  const router = useRouter();
  const tools = [
    { name: "BABYSHARK" },
    { name: "BATTLEDANCE" },
    { name: "HELLO" },
    { name: "LAUGH" },
    { name: "PROVOKE" },
    { name: "SELFIE" }
  ];
  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Emotes" />

      {/* Emotes Description */}
      <div className="text-center px-4">
        <h2 className="text-xl font-bold text-white mb-2">Free Fire Emotes</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Express yourself with fun and unique emotes in Free Fire. 
          Show off your personality with dance moves, gestures, and special animations.
        </p>
      </div>

      <Ads />

      <div className="grid grid-cols-2 gap-4 pb-10">
        {tools.map((tool, index) => (
          //   <Link href={`/tools/characters/${tool.name.toLowerCase()}`}>
          <div
            key={tool.name}
            className={`flex cursor-pointer justify-center relative ${
              index === 2 ? "pt-[5px]" : ""
            } ${index === tools.length - 1 ? "" : ""}`}
            onClick={() => {
              const path = `/tools/emotes/${tool.name}?item=${tool.name}&category=pets`;
              router.push(path);
            }}
          >
            <div className="h-36 w-[67px] bg-transparent relative z-20">
              <img
                className="h-full w-full object-contain bg-transparent"
                src={`/resources/emotes/${tool.name.toLocaleUpperCase()}.png`}
                alt={tool.name}
              />
            </div>
            <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>
            <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
              {tool.name}
            </div>
          </div>
          //   </Link>
        ))}
      </div>

      {/* Free Fire Emotes Information */}
      <div className="px-4 pt-8">
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
          <h3 className="text-white font-bold text-lg mb-3">💃 Free Fire Emotes & Expressions</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Emotes in Free Fire allow players to express their personality and celebrate victories in style. From dance moves to gestures, emotes add fun and personality to your gameplay experience.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Popular emotes include the Baby Shark dance, Battle Dance for celebrations, and Hello gesture for friendly interactions. Each emote has unique animations and can be used strategically to communicate with teammates.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Emotes can be used to taunt opponents, celebrate eliminations, or simply have fun with friends. Some emotes are rare and highly sought after, making them valuable collectibles in the Free Fire universe.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Mastering the art of emoting can boost team morale and intimidate opponents. Use emotes wisely to show your confidence and make your mark on the battlefield with style and flair!
          </p>
        </div>
      </div>
    </div>
  );
}
