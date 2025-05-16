"use client";

import { useEffect } from "react";

type Googletag = {
  cmd: Array<() => void>;
  pubads: () => {
    addEventListener: (
      eventName: string,
      callback: (event: any) => void
    ) => void;
  };
  defineOutOfPageSlot: (
    adUnitPath: string,
    outOfPageFormat: string
  ) => any;
  enableServices: () => void;
  display: (slot: any) => void;
  enums?: {
    OutOfPageFormat: {
      REWARDED: string;
    };
  };
};

const RewardedAd = () => {
  useEffect(() => {
    const initRewardedAd = () => {
      const googletag = (window as any).googletag as Googletag;
      if (!googletag) return;

      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(() => {
        const format = googletag.enums?.OutOfPageFormat.REWARDED || "rewarded";
        const slot = googletag.defineOutOfPageSlot(
          "/23200510714/NIRAV-REWARD-2", // Replace with your Ad Unit
          format
        );

        if (slot) {
          slot.addService(googletag.pubads());

          googletag.pubads().addEventListener("rewardedSlotReady", (event: any) => {
            console.log("Rewarded ad ready. Showing now.");
            event.makeRewardedVisible();
          });

          googletag.pubads().addEventListener("rewardedSlotClosed", () => {
            console.log("User closed rewarded ad.");
          });

          googletag.enableServices();
          googletag.display(slot);
        }
      });
    };

    if (!(window as any).googletag) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => initRewardedAd();
      document.head.appendChild(script);
    } else {
      initRewardedAd();
    }
  }, []);

  return null;
};

export default RewardedAd;
