"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const divId = "div-gpt-ad-1747205351334-0";
    console.log("🚀 Initializing Google Ad Manager ads for pathname:", pathname);

    // Prevent multiple initializations
    if (isInitialized) {
      console.log("⚠️ Ad already initialized, skipping");
      return;
    }

    // Clear previous ad contents safely
    const adDiv = document.getElementById(divId);
    if (adDiv) {
      try {
        adDiv.innerHTML = "";
        console.log("🧹 Cleared previous ad content");
      } catch (error) {
        console.warn("⚠️ Could not clear ad content:", error);
      }
    }

    // Load Google Ad Manager (GPT) script
    const loadGPT = () => {
      console.log("📜 Loading Google Ad Manager (GPT) script");
      
      if (!document.getElementById("gpt-script")) {
        const script = document.createElement("script");
        script.id = "gpt-script";
        script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.onerror = () => {
          console.error("❌ Failed to load GPT script");
          setAdError("Failed to load Google Ad Manager script");
        };
        script.onload = () => {
          console.log("✅ GPT script loaded successfully");
        };
        document.head.appendChild(script);
      } else {
        console.log("📜 GPT script already loaded");
      }
    };

    // Initialize Google Ad Manager ad
    const initializeAd = () => {
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds max wait

      const interval = setInterval(() => {
        attempts++;
        
        if (window.googletag && window.googletag.apiReady) {
          clearInterval(interval);
          console.log("✅ Google Ad Manager API ready, creating ad slot");

          window.googletag = window.googletag || { cmd: [] };

          window.googletag.cmd.push(() => {
            try {
              // Safely destroy previous slots to avoid conflicts
              try {
                const slots = window.googletag.pubads().getSlots?.() || [];
                const existingSlot = slots.find((s) =>
                  s.getSlotElementId?.() === divId
                );
                if (existingSlot) {
                  // Check if the slot element still exists in DOM before destroying
                  const slotElement = document.getElementById(divId);
                  if (slotElement && slotElement.parentNode) {
                    window.googletag.destroySlots([existingSlot]);
                    console.log("🗑️ Destroyed existing ad slot");
                  } else {
                    console.log("⚠️ Slot element not found in DOM, skipping destroy");
                  }
                }
              } catch (destroyError) {
                console.warn("⚠️ Error destroying previous slots:", destroyError);
                // Continue with ad creation even if destroy fails
              }

              // Define new ad slot
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
                setAdLoaded(true);
                setIsInitialized(true);
                console.log("✅ Google Ad Manager ad slot created and displayed");
              } else {
                console.error("❌ Failed to create ad slot");
                setAdError("Failed to create ad slot");
              }
            } catch (error) {
              console.error("❌ Google Ad Manager error:", error);
              setAdError("Ad Manager initialization failed");
            }
          });
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          console.error("❌ Google Ad Manager API not ready after 5 seconds");
          setAdError("Ad Manager API timeout");
        }
      }, 100);

      return () => {
        clearInterval(interval);
        // Safe cleanup - don't try to destroy slots on unmount
        console.log("🧹 Component unmounting, skipping slot cleanup");
      };
    };

    // Load script and initialize ad
    loadGPT();
    const cleanup = initializeAd();
    return cleanup;

  }, [pathname, isInitialized]);

  return (
    <div className="ad-container">
      <div
        id="div-gpt-ad-1747205351334-0"
        style={{ 
          minWidth: "300px", 
          minHeight: "90px", 
          textAlign: "center",
          border: "1px dashed #ccc",
          backgroundColor: "#f9f9f9"
        }}
      >
        {!adLoaded && !adError && (
          <div style={{ padding: "20px", color: "#666" }}>
            Loading Google Ad Manager ad...
          </div>
        )}
        {adError && (
          <div style={{ padding: "20px", color: "#ff6b6b" }}>
            Ad failed to load: {adError}
          </div>
        )}
      </div>
      
      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ fontSize: "10px", color: "#999", marginTop: "5px" }}>
          Debug: {adLoaded ? "✅ Ad Manager Loaded" : adError ? `❌ ${adError}` : "⏳ Loading Ad Manager..."}
        </div>
      )}
    </div>
  );
}
