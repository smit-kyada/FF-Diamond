"use client";

import BackHeader from "../BackHeader";
import Ads from "./Ads";
import Link from "next/link";

interface WeaponDetailClientProps {
  item: string;
  category: string;
  url: string;
}

export default function WeaponDetailClient({
  item,
  category,
  url,
}: WeaponDetailClientProps) {
  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      <BackHeader title={item} />
      <Ads />

      <div className="flex items-center justify-center px-5 pb-[20px]">
        <div>
          <img src={url} alt={item+category} className="max-h-48 max-w-full" />
        </div>
      </div>

      <div className="flex items-center justify-center pb-5">
        <div className="bg-[url('/resources/bg-details.png')] bg-no-repeat bg-cover bg-top px-6 pb-6 pt-7 rounded-3xl w-full">
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
  );
}
