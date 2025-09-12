"use client";

import { useEffect, useRef } from "react";

// googletag interface is now declared globally in layout.tsx

export default function InterstitialAd() {
  const hasShownInterstitial = useRef(false);

  useEffect(() => {
    // Check if we've already shown an interstitial in this session
    const sessionKey = "interstitial_shown";
    const hasShown = sessionStorage.getItem(sessionKey);
    
    if (hasShown || hasShownInterstitial.current) {
      return;
    }

    // Mark that we're showing an interstitial
    hasShownInterstitial.current = true;
    sessionStorage.setItem(sessionKey, "true");

    console.log("🚀 Initializing interstitial ad");

    // Initialize googletag
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      try {
        const slot = window.googletag.defineOutOfPageSlot(
          "/23308471723/bimbgames-one-INTER-1",
          window.googletag.enums?.OutOfPageFormat.INTERSTITIAL || "interstitial"
        );

        // Slot returns null if the page or device does not support interstitials
        if (slot) {
          const pubads = window.googletag.pubads();
          (slot as { addService: (service: unknown) => void }).addService(pubads);
          
          window.googletag.enableServices();
          
          // Display the interstitial ad
          window.googletag.display(slot);
          console.log("✅ Interstitial ad displayed");
        } else {
          console.log("❌ Interstitial not supported on this page/device");
        }
      } catch (error) {
        console.error("❌ Interstitial ad error:", error);
      }
    });
  }, []);

  // This component doesn't render anything visible
  return null;
}
