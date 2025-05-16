"use client";
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
import RewardedAd from "../extra/RewardedAd";

export default function FreeDiamonPage() {
  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      <RewardedAd />
      <BackHeader title="Free Diamonds Coin" />

      <Ads />

      <div className="text-center text-white text-xl font-bold">
        Choose Pass &amp; Rewards
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <Link href="/free-diamonds-coin/diamonds">
          <img
            className="object-contain max-w-full"
            alt="Unlock Diamonds"
            src="/resources/buttons/diamondCoin/unlock-diamond.png"
          />
        </Link>
        <Link href="/free-diamonds-coin/coin">
          <img
            className="object-contain max-w-full"
            alt="Unlock Coins"
            src="/resources/buttons/diamondCoin/unlock-coin.png"
          />
        </Link>
      </div>
    </div>
  );
}
