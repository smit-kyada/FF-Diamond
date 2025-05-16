"use client";

import { useEffect } from "react";

type GoogletagType = {
  cmd: Array<() => void>;
  apiReady?: boolean;
  enums?: {
    OutOfPageFormat: {
      REWARDED: string;
      INTERSTITIAL: string;
    };
  };
  pubads: () => {
    setLocation: (location: string) => void;
    addEventListener?: (
      eventName: string,
      callback: (...args: unknown[]) => void
    ) => void;
  };
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: string
  ) => {
    addService: (service: unknown) => void;
  } | null;
  enableServices: () => void;
  destroySlots: (slots?: unknown[]) => void;
  display: (divId: string | unknown) => void;
};

export default function HeadRewardLoader() {
  useEffect(() => {
    // Inject GPT script if not already loaded
    if (!document.getElementById("gpt-script")) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    const interval = setInterval(() => {
      const googletag = window.googletag as unknown as GoogletagType;


      if (
        googletag &&
        googletag.apiReady &&
        typeof googletag.defineOutOfPageSlot === "function"
      ) {
        clearInterval(interval);

        googletag.cmd.push(() => {

          const urlParams = new URLSearchParams(window.location.search);
          const param = urlParams.get("key");
          const sessionFlag = sessionStorage.getItem("showAdsEnabled");

          if (param === "showads") {
            sessionStorage.setItem("showAdsEnabled", "true");
          }

          const shouldSpoof = sessionFlag === "true" || param === "showads";

          if (shouldSpoof) {
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
              "Illinois, US"
            ];
            const randomLoc =
              testLocations[Math.floor(Math.random() * testLocations.length)];
            googletag.pubads().setLocation?.(randomLoc);
          }

          const REWARDED =
            googletag.enums?.OutOfPageFormat?.REWARDED || "rewarded";
          const INTERSTITIAL =
            googletag.enums?.OutOfPageFormat?.INTERSTITIAL || "interstitial";

          const rewardedSlot = googletag
            .defineOutOfPageSlot("/23200510714/NIRAV-REWARD-2", REWARDED)
            ?.addService(googletag.pubads());

          if (!rewardedSlot) {
            console.error("Failed to define rewarded ad slot.");
            return;
          }

          const interstitialSlot = googletag
            .defineOutOfPageSlot("/23200510714/NIRAV-INTER-2", INTERSTITIAL);
          if (interstitialSlot) {
            interstitialSlot.addService(googletag.pubads());
          }

          googletag.enableServices();

          // Display both ads
          googletag.display(rewardedSlot);
          if (interstitialSlot) {
            googletag.display(interstitialSlot);
          }


          // Event listeners for rewarded ad
          googletag.pubads().addEventListener?.("rewardedSlotReady", (...args: unknown[]) => {
              const evt = args[0] as { makeRewardedVisible: () => Promise<void> };

              evt.makeRewardedVisible().catch((err: unknown) => {
                console.error("Failed to show rewarded ad:", err);
              });
            });


          googletag.pubads().addEventListener?.("rewardedSlotGranted", (...args: unknown[]) => {
              const evt = args[0] as { payload: unknown };
              console.log("User granted reward:", evt.payload);
            });


          googletag.pubads().addEventListener?.("rewardedSlotClosed", () => {
            console.log("Rewarded ad closed by the user.");
            googletag.destroySlots?.([rewardedSlot]);
          });
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
