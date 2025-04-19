"use client";
// app/tools/page.tsx
 
import { useRouter } from "next/navigation";
import BackHeader from "@/app/BackHeader";
import "../../success/sucess.css";
import Ads from "@/app/extra/Ads";

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
      <BackHeader title="Pets" />

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
              <img
                className="h-full w-full object-contain bg-transparent"
                src={`/resources/pets/${tool.name}.png`}
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
    </div>
  );
}
