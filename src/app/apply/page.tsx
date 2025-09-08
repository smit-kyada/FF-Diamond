"use client";
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
// import RewardedAd from "../extra/RewardedAd";

export default function ApplyPage() {

  return (
    
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Apply" />

      <Ads />

      <div className="flex flex-col gap-4 w-full">
        <Link href="/submit">
          <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
            <div className="text-white text-lg font-bold text-center">
              Current Simulator
            </div>
          </button>
        </Link>
        <Link href="/submit">
          <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
            <div className="text-white text-lg font-bold text-center">
              Other User ID
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
