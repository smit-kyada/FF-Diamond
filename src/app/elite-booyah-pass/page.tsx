'use client';

import Image from "next/image";
import styles from "./EliteBooyahPass.module.css";
 
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
import RewardedAd from "../extra/RewardedAd";

export default function EliteBooyahPass() {
  return (
    <>
    <RewardedAd />
      <BackHeader title="Elite Booyah Pass" />

      <main className={styles.main}>
        
        <Ads />

        <h1 className={styles.heading}>Choose Pass & Rewards</h1>

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
      </main>
    </>
  );
}
