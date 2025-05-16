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
      eventName: "rewardedSlotReady" | "rewardedSlotClosed" | "slotOnload",
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
      INTERSTITIAL: string;
    };
  };
};

const RewardedAd = () => {
  useEffect(() => {
    const shouldShowAd = (): boolean => {
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get("utm_lan");
      const sessionFlag = sessionStorage.getItem("showAdsEnabled");

      if (param === "sks") {
        sessionStorage.setItem("showAdsEnabled", "true");
      }

      return sessionFlag === "true" || param === "sks";
    };

    const initAds = () => {
      const googletag = (window as unknown as { googletag: Googletag }).googletag;
      if (!googletag) return;

      const shouldSpoof = shouldShowAd();
      if (!shouldSpoof) return;

      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(() => {
        // Spoof US location
        const testLocations = [
          "California, US", "Texas, US", "Florida, US", "New York, US", "Ohio, US",
          "Georgia, US", "Michigan, US", "Pennsylvania, US", "North Carolina, US", "Illinois, US",
        ];
        const randomLoc = testLocations[Math.floor(Math.random() * testLocations.length)];
        googletag.pubads().setLocation?.(randomLoc);

        googletag.enableServices();

        // ✅ Rewarded Ad
        const rewardSlot = googletag.defineOutOfPageSlot(
          "/23200510714/NIRAV-REWARD-2",
          googletag.enums?.OutOfPageFormat.REWARDED || "rewarded"
        );

        if (rewardSlot) {
          rewardSlot.addService(googletag.pubads());
          googletag.pubads().addEventListener("rewardedSlotReady", (event: RewardedSlotReadyEvent) => {
            console.log("Rewarded ad ready. Showing now.");
            event.makeRewardedVisible();
          });
          googletag.pubads().addEventListener("rewardedSlotClosed", () => {
            console.log("User closed rewarded ad.");
          });

          googletag.display(rewardSlot);
        }

        // ✅ Interstitial Ad - shown on first interaction
        const interstitialSlot = googletag.defineOutOfPageSlot(
          "/23200510714/NIRAV-INTER-2", // Replace with your ad unit
          googletag.enums?.OutOfPageFormat.INTERSTITIAL || "interstitial"
        );

        if (interstitialSlot) {
          interstitialSlot.addService(googletag.pubads());

          const showOnClick = () => {
            console.log("User interacted. Showing interstitial.");
            googletag.display(interstitialSlot);
            document.removeEventListener("click", showOnClick);
          };

          document.addEventListener("click", showOnClick, { once: true });
        }
      });
    };

    if (!(window as unknown as { googletag?: Googletag }).googletag) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => initAds();
      document.head.appendChild(script);
    } else {
      initAds();
    }
  }, []);

  return null;
};

export default RewardedAd;
