"use client";

import { useEffect } from "react";

type RewardedSlotReadyEvent = {
  makeRewardedVisible: () => void;
};

type Googletag = {
  cmd: Array<() => void>;
  pubads: () => {
    setLocation?: (location: string) => void;
    addEventListener: (
      eventName: "rewardedSlotReady" | "rewardedSlotClosed",
      callback: (event: RewardedSlotReadyEvent) => void
    ) => void;
  };
  defineOutOfPageSlot: (
    adUnitPath: string,
    outOfPageFormat: string
  ) => {
    addService: (service: ReturnType<Googletag["pubads"]>) => void;
  } | null;
  enableServices: () => void;
  display: (slot: unknown) => void;
  enums?: {
    OutOfPageFormat: {
      REWARDED: string;
    };
  };
};

const RewardedAd = () => {
  useEffect(() => {
    const shouldShowAd = (): boolean => {
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get("key");
      const sessionFlag = sessionStorage.getItem("showAdsEnabled");

      if (param === "showads") {
        sessionStorage.setItem("showAdsEnabled", "true");
      }

      return sessionFlag === "true" || param === "showads";
    };

    const initRewardedAd = () => {
      const googletag = (window as unknown as { googletag: Googletag }).googletag;
      if (!googletag) return;

      const shouldSpoof = shouldShowAd();
      if (!shouldSpoof) return;

      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(() => {
        // Spoof US location
        const testLocations = [
          "California, US",
          "Texas, US",
          "Florida, US",
          "New York, US",
          "Ohio, US",
          "Georgia, US",
          "Michigan, US",
          "Pennsylvania, US",
          "North Carolina, US",
          "Illinois, US",
        ];
        const randomLoc = testLocations[Math.floor(Math.random() * testLocations.length)];
        googletag.pubads().setLocation?.(randomLoc);

        const format = googletag.enums?.OutOfPageFormat.REWARDED || "rewarded";
        const slot = googletag.defineOutOfPageSlot(
          "/23200510714/NIRAV-REWARD-2", // Replace with your real ad unit
          format
        );

        if (slot) {
          slot.addService(googletag.pubads());

          googletag.pubads().addEventListener("rewardedSlotReady", (event) => {
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

    if (!(window as unknown as { googletag?: Googletag }).googletag) {
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
