"use client";
// app/tools/page.tsx
 
import { useRouter } from "next/navigation";
import BackHeader from "@/app/BackHeader";
import Ads from "@/app/extra/Ads";
// import RewardedAd from "../../extra/RewardedAd";

export default function CharatersPage() {
  const router = useRouter();
  const tools = [
    {
      name: "A-PATROA",
      image: "/resources/characters/A-patroa.png",
    },
    {
      name: "A124",
      image: "/resources/characters/a124.png",
    },
    {
      name: "ALOK",
      image: "/resources/characters/alok.png",
    },
    {
      name: "ALVARO",
      image: "/resources/characters/alvaro.png",
    },
    {
      name: "ANDREW",
      image: "/resources/characters/andrew.png",
    },
    {
      name: "ANTONIO",
      image: "/resources/characters/antonio.png",
    },
    {
      name: "CAROLINE",
      image: "/resources/characters/caroline.png",
    },
    {
      name: "CHRONO",
      image: "/resources/characters/chrono.png",
    },
    {
      name: "CLU",
      image: "/resources/characters/clu.png",
    },
    {
      name: "D-BEE",
      image: "/resources/characters/d-bee.png",
    },
    {
      name: "DASHA",
      image: "/resources/characters/dasha.png",
    },
    {
      name: "DIMITRI",
      image: "/resources/characters/dimitri.png",
    },
    {
      name: "FORD",
      image: "/resources/characters/ford.png",
    },
    {
      name: "HAYATO",
      image: "/resources/characters/hayato.png",
    },
    {
      name: "HOMER",
      image: "/resources/characters/homer.png",
    },
    {
      name: "IGNIS",
      image: "/resources/characters/ignis.png",
    },
    {
      name: "IRIS",
      image: "/resources/characters/iris.png",
    },
    {
      name: "JBIEBS",
      image: "/resources/characters/jbiebs.png",
    },
    {
      name: "JOSEPH",
      image: "/resources/characters/joseph.png",
    },
    {
      name: "JOTA",
      image: "/resources/characters/jota.png",
    },
    {
      name: "K",
      image: "/resources/characters/k.png",
    },
    {
      name: "KAIROS",
      image: "/resources/characters/kairos.png",
    },
    {
      name: "KAPELLA",
      image: "/resources/characters/kapella.png",
    },
    {
      name: "KASSIE",
      image: "/resources/characters/kassie.png",
    },
    {
      name: "KELLY",
      image: "/resources/characters/kelly.png",
    },
    {
      name: "KENTA",
      image: "/resources/characters/kenta.png",
    },
    {
      name: "KLA",
      image: "/resources/characters/kla.png",
    },
    {
      name: "LAURA",
      image: "/resources/characters/laura.png",
    },
    {
      name: "LEON",
      image: "/resources/characters/leon.png",
    },
    {
      name: "LILA",
      image: "/resources/characters/lila.png",
    },
    {
      name: "LUNA",
      image: "/resources/characters/luna.png",
    },
    {
      name: "LUQUETA",
      image: "/resources/characters/luqueta.png",
    },
    {
      name: "MARO",
      image: "/resources/characters/maro.png",
    },
    {
      name: "MAXIM",
      image: "/resources/characters/maxim.png",
    },
    {
      name: "MIGUEL",
      image: "/resources/characters/miguel.png",
    },
    {
      name: "MISHA",
      image: "/resources/characters/misha.png",
    },
    {
      name: "MOCO",
      image: "/resources/characters/moco.png",
    },
    {
      name: "NAIRI",
      image: "/resources/characters/nairi.png",
    },
    {
      name: "NIKITA",
      image: "/resources/characters/nikita.png",
    },
    {
      name: "NOTORA",
      image: "/resources/characters/notora.png",
    },
    {
      name: "OLIVIA",
      image: "/resources/characters/olivia.png",
    },
    {
      name: "ORION",
      image: "/resources/characters/orion.png",
    },
    {
      name: "OTHO",
      image: "/resources/characters/otho.png",
    },
    {
      name: "PALOMA",
      image: "/resources/characters/paloma.png",
    },
    {
      name: "RAFAEL",
      image: "/resources/characters/rafael.png",
    },
    {
      name: "RYDEN",
      image: "/resources/characters/ryden.png",
    },
    {
      name: "SANTINO",
      image: "/resources/characters/santino.png",
    },
    {
      name: "SHANI",
      image: "/resources/characters/shani.png",
    },
    {
      name: "SHIROU",
      image: "/resources/characters/shirou.png",
    },
    {
      name: "SKYLER",
      image: "/resources/characters/skyler.png",
    },
    {
      name: "SONIA",
      image: "/resources/characters/sonia.png",
    },
    {
      name: "STEFFIE",
      image: "/resources/characters/steffie.png",
    },
    {
      name: "SUZY",
      image: "/resources/characters/suzy.png",
    },
    {
      name: "TATSUYA",
      image: "/resources/characters/tatsuya.png",
    },
    {
      name: "THIVA",
      image: "/resources/characters/thiva.png",
    },
    {
      name: "WOLFRAHH",
      image: "/resources/characters/wolfrahh.png",
    },
    {
      name: "WUKONG",
      image: "/resources/characters/wukong.png",
    },
    {
      name: "XAYNE",
      image: "/resources/characters/xayne.png",
    },
  ];

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Characters" />

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
                const path = `/tools/characters/${tool.name.toLowerCase()}?item=${tool.name.toLowerCase()}&category=characters`;
                router.push(path);
              }}
            >
              <div className="h-36 w-[67px] bg-transparent relative z-20">
                <img
                  className="h-full w-full object-contain bg-transparent"
                  src={tool.image}
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
