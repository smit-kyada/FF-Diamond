"use client";
// app/tools/page.tsx
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
import Image from "next/image";
// import RewardedAd from "../extra/RewardedAd";

export default function FreeDiamonPage() {
  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Free Diamonds Coin" />

      <Ads />

      {/* Free Diamonds Description */}
      <div className="text-center px-4">
        <h2 className="text-xl font-bold text-white mb-2">Free Diamonds & Coins</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Get free diamonds and coins daily to unlock premium items in Free Fire. 
          Earn rewards without spending real money and enhance your gaming experience.
        </p>
      </div>

      <div className="text-center text-white text-xl font-bold mt-4">
        Choose Pass &amp; Rewards
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <Link href="/free-diamonds-coin/diamonds">
          <Image
            className="object-contain max-w-full"
            alt="Unlock Diamonds"
            src="/resources/buttons/diamondCoin/unlock-diamond.png"
            width={200}
            height={200}
            unoptimized
          />
        </Link>
        <Link href="/free-diamonds-coin/coin">
          <Image
            className="object-contain max-w-full"
            alt="Unlock Coins"
            src="/resources/buttons/diamondCoin/unlock-coin.png"
            width={200}
            height={200}
            unoptimized
          />
        </Link>
      </div>

      {/* Free Diamonds Information */}
      <div className="px-4 pt-8">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 rounded-lg border border-cyan-500/30">
          <h3 className="text-white font-bold text-lg mb-3">💎 Free Diamonds & Coins Guide</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Diamonds and coins are the primary currencies in Free Fire, used to purchase characters, weapons, pets, and other premium items. Earning these currencies through legitimate means is essential for progressing in the game.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Diamonds are the premium currency used for purchasing exclusive items, character bundles, and special events. Coins are the standard currency earned through gameplay and used for basic purchases and upgrades.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Players can earn diamonds and coins through daily missions, events, tournaments, and special promotions. Participating in ranked matches and completing achievements also provides currency rewards.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Smart currency management is key to maximizing your Free Fire experience. Save diamonds for exclusive items and use coins for regular upgrades and character improvements!
          </p>
        </div>
      </div>
    </div>
  );
}
