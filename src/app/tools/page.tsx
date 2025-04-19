'use client';
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";

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
      <BackHeader title="Tools" />

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
    </div>
  );
}
