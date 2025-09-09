"use client";
// app/tools/page.tsx
 
import { useRouter } from "next/navigation";
import BackHeader from "@/app/BackHeader";
import "../../success/sucess.css";
import Ads from "@/app/extra/Ads";
import Image from "next/image";
// import RewardedAd from "../../extra/RewardedAd";

export default function CharatersPage() {
  const router = useRouter();
  const tools = [
    { name: "KACTUS" },
    { name: "FANG" },
    { name: "HOOT" },
    { name: "FINN" },
    { name: "ZASIL" },
    { name: "ARVON" },
    { name: "FLASH" },
    { name: "YETI" },
    { name: "AGENTHOP" },
    { name: "SENSEITIG" },
    { name: "drBeanie" },
    { name: "MOONY" },
    { name: "DREKI" },
    { name: "BEASTON" },
    { name: "ROCKIE" },
    { name: "mrWaggor" },
    { name: "FALCO" },
    { name: "OTTERO" },
    { name: "ROBO" },
    { name: "SPIRITFOX" },
    { name: "SHIBA" },
    { name: "DETECTIVEPANDA" },
    { name: "NIGHTPANTHER" },
    { name: "PUG" }
  ];
  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Pets" />

      {/* Pets Description */}
      <div className="text-center px-4">
        <h2 className="text-xl font-bold text-white mb-2">Free Fire Pets</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Collect adorable pets that provide special abilities and bonuses in battle. 
          Each pet has unique skills to help you survive and dominate in Free Fire matches.
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
              const path = `/tools/pets/${tool.name}?item=${tool.name}&category=pets`;
              router.push(path);
            }}
          >
            <div className="h-36 w-[67px] bg-transparent relative z-20">
              <Image
                className="h-full w-full object-contain bg-transparent"
                src={`/resources/pets/${tool.name}.png`}
                alt={tool.name}
                width={67}
                height={144}
                unoptimized
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

      {/* Free Fire Pets Information */}
      <div className="px-4 pt-8">
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-lg border border-pink-500/30">
          <h3 className="text-white font-bold text-lg mb-3">🐾 Free Fire Pets & Companions</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Pets in Free Fire are more than just cute companions - they provide valuable abilities that can turn the tide of battle. Each pet has unique skills that activate automatically during gameplay to give you tactical advantages.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Popular pets include Detective Panda with armor protection, Rockie for increased movement speed, and Agent Hop for healing abilities. Each pet has different skill levels and can be upgraded using pet fragments.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Pet abilities range from defensive skills like damage reduction and healing to offensive boosts like increased damage and faster reload times. Some pets provide utility benefits like faster looting or increased inventory space.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Choosing the right pet for your playstyle can make a significant difference in your performance. Whether you prefer aggressive combat or defensive survival, there&apos;s a perfect pet companion waiting to help you achieve victory!
          </p>
        </div>
      </div>
    </div>
  );
}
