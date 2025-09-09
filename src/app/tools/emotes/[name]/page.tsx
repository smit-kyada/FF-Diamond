import { notFound } from "next/navigation";
import BackHeader from "../../../BackHeader";
import Ads from "@/app/extra/Ads";
import Link from "next/link";
// import RewardedAd from "../../../extra/RewardedAd";

// Sample JSON data (this would typically come from an API or file)
const tools = [
    { name: "BABYSHARK" },
    { name: "BATTLEDANCE" },
    { name: "HELLO" },
    { name: "LAUGH" },
    { name: "PROVOKE" },
    { name: "SELFIE" }
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
          <img src={`/resources/emotes/${tool.name}.png`} alt="lila" className="max-h-48 max-w-full" />
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
      
      {/* Emote Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">💃 {tool.name} Emote Details</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The {tool.name} emote is a fun and expressive animation that allows you to show your personality in Free Fire. Emotes are perfect for celebrating victories, taunting opponents, or simply having fun with friends.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Each emote in Free Fire has unique animations and timing. Some emotes are rare and highly sought after, making them valuable collectibles that showcase your dedication to the game.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Use the {tool.name} emote strategically to boost team morale, intimidate enemies, or celebrate your achievements in style. Master the art of emoting to make your mark on the battlefield!
          </p>
        </div>
      </div>

      
    </div>
  );
}
