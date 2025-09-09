"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      apiReady?: boolean;
      pubads: () => {
        setLocation: (location: string) => void;
        getSlots?: () => Array<{
          getSlotElementId: () => string;
        }>;
        addEventListener?: (
          eventName: string,
          callback: (...args: unknown[]) => void
        ) => void;
      };
      defineSlot: (
        adUnitPath: string,
        size: number[] | number[][],
        divId: string
      ) => {
        addService: (service: unknown) => void;
      };
      destroySlots: (slots?: unknown[]) => void;
      enableServices: () => void;
      display: (divId: string) => void;
    };
  }
}

export default function Ads() {
  const adRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitialized.current) {
      return;
    }

    const divId = "div-gpt-ad-1747205351334-0";
    console.log("🚀 Initializing Google Ad Manager ad");

    // Load GPT script
    if (!document.getElementById("gpt-script")) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    // Initialize googletag
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      try {
        // Define ad slot
        const slot = window.googletag.defineSlot(
          "/23308471723/bimbgames-one-BANNER-1",
          [
            [300, 250],
            [336, 280],
          ],
          divId
        );

        if (slot) {
          slot.addService(window.googletag.pubads());
          window.googletag.display(divId);
          isInitialized.current = true;
          console.log("✅ Google Ad Manager ad displayed");
        }
      } catch (error) {
        console.error("❌ Ad initialization error:", error);
      }
    });

    // Cleanup function
    return () => {
      console.log("🧹 Component cleanup");
    };
  }, []);

  return (
    <div className="ad-container">
      <div
        ref={adRef}
        id="div-gpt-ad-1747205351334-0"
        style={{ 
          minWidth: "300px", 
          minHeight: "90px", 
          textAlign: "center"
        }}
      />
    </div>
  );
}
