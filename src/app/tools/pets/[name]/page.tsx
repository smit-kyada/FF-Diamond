import { notFound } from "next/navigation";
import BackHeader from "../../../BackHeader";
import Ads from "@/app/extra/Ads";
import Link from "next/link";
import Image from "next/image";
// import RewardedAd from "../../../extra/RewardedAd";

// Sample JSON data (this would typically come from an API or file)
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

export async function generateStaticParams() {
  // Returns static params for the dynamic route
  return tools.map((tool) => ({
    name: tool.name,
  }));
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  // Await the params to access 'name'
  const { name } = await params; // Await the promise for 'params'
  const tool = tools.find((t) => t.name === name);

  if (!tool) {
    return notFound(); // Return 404 if tool is not found
  }

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title={tool.name} />

      {/* <div className="pb-10"> */}
      <Ads />

      <div className="flex items-center justify-center px-5 pb-[20px]">
        <div>
          <Image src={`/resources/pets/${tool.name}.png`} alt="lila" className="max-h-48 max-w-full" width={200} height={200} unoptimized />
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

      {/* Pet Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-lg border border-pink-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">🐾 {tool.name} Pet Details</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            {tool.name} is a loyal companion in Free Fire that provides valuable abilities to help you survive and dominate the battlefield. Each pet has unique skills that activate automatically during gameplay.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Pet abilities in Free Fire range from defensive skills like armor protection and healing to offensive boosts like increased damage and faster reload times. Some pets provide utility benefits like faster looting or increased inventory space.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Choose {tool.name} as your companion to gain tactical advantages in battle. Whether you prefer aggressive combat or defensive survival, this pet will help you achieve victory in Free Fire matches!
          </p>
        </div>
      </div>

      
    </div>
  );
}
