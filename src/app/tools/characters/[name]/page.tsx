import { notFound } from "next/navigation";
import BackHeader from "../../../BackHeader";
import Ads from "@/app/extra/Ads";
import Link from "next/link";
import RewardedAd from "../../../extra/RewardedAd";

// Sample JSON data (this would typically come from an API or file)
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

export async function generateStaticParams() {
  // Returns static params for the dynamic route
  return tools.map((tool) => ({
    name: tool.name.toLowerCase(),
  }));
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  // Await the params to access 'name'
  const { name } = await params; // Await the promise for 'params'
  const tool = tools.find((t) => t.name.toLowerCase() === name);

  if (!tool) {
    return notFound(); // Return 404 if tool is not found
  }

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      <RewardedAd />
      <BackHeader title={tool.name} />

      {/* <div className="pb-10"> */}
      <Ads />

      <div className="flex items-center justify-center px-5 pb-[20px]">
        <div>
          <img src={tool.image} alt="lila" className="max-h-48 max-w-full" />
        </div>
      </div>

      <div className="flex items-center justify-center pb-5">
        <div className="bg-[url('/resources/bg-details.png')] bg-no-repeat bg-cover bg-top px-6 pb-6 pt-7 rounded-3xl  left-0 bottom-0 w-full  ">
          <div>
            <Link href="/players">
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-700 via-purple-500 to-blue-400">
                <span className="text-white text-lg leading-6 font-bold text-center">
                  Apply Now
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div className="max-w-[390px] mx-auto pt-24">
  //       <div className="flex justify-between items-center px-6">
  //         <Link href="/tools/characters">
  //           <svg
  //             className="flex-shrink-0 cursor-pointer"
  //             width="24"
  //             height="24"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //           >
  //             <path
  //               d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
  //               stroke="white"
  //               strokeWidth="1.5"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //             <path
  //               d="M20.5019 12H3.67188"
  //               stroke="white"
  //               strokeWidth="1.5"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             />
  //           </svg>
  //         </Link>
  //         <h1 className="text-white text-lg uppercase font-semibold">{tool.name}</h1>
  //         <div className="size-6"></div>
  //       </div>

  //       <div className="flex justify-center mt-10">
  //         <Image src={tool.image} alt={tool.name} width={200} height={200} />
  //       </div>

  //     </div>
  //   );
}
