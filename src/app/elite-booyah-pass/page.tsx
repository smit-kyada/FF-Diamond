'use client';

import Image from "next/image";
import styles from "./EliteBooyahPass.module.css";
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
// import RewardedAd from "../extra/RewardedAd";

export default function EliteBooyahPass() {
  return (
    <>
    {/* <RewardedAd /> */}
      <BackHeader title="Elite Booyah Pass" />

      <main className={styles.main}>
        
        <Ads />

        {/* Elite Pass Description */}
        <div className="text-center px-4 mb-6">
          <h1 className={styles.heading}>Choose Pass & Rewards</h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Unlock premium Elite Pass and Booyah Pass rewards. Get exclusive skins, 
            characters, weapons, and special items to enhance your Free Fire experience.
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <Link href="/elite-booyah-pass/elite">
            <Image
              className={styles.imageButton}
              src="/resources/buttons/elitePass/elite.png"
              alt="Unlock Diamonds"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/elite-booyah-pass/booyah">
            <Image
              className={styles.imageButton}
              src="/resources/buttons/elitePass/booyah-pass.png"
              alt="Unlock Coins"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/elite-booyah-pass/reward">
            <Image
              className={styles.imageButton}
              src="/resources/buttons/elitePass/reward.png"
              alt="Unlock Coins"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Elite Pass Information */}
        <div className="px-4 pt-8">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
            <h3 className="text-white font-bold text-lg mb-3">👑 Elite Pass & Booyah Pass</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              The Elite Pass and Booyah Pass are premium battle pass systems in Free Fire that offer exclusive rewards, character skins, weapons, and special items. These passes provide incredible value for dedicated players.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Elite Pass rewards include exclusive character bundles, weapon skins, pet skins, and special emotes. Each season brings new themes and limited-time rewards that can't be obtained anywhere else.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Booyah Pass offers additional premium content with unique character abilities, rare weapon skins, and exclusive accessories. Both passes feature tier-based progression systems with rewards unlocked as you level up.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Investing in these passes not only gives you access to premium content but also enhances your gaming experience with exclusive items that showcase your dedication to Free Fire!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
