"use client";

import { useEffect, useRef, useState } from "react";

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
  const [adStatus, setAdStatus] = useState("loading");

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
        // Try different ad unit paths
        const adUnitPaths = [
          "/23308471723/bimbgames-one-BANNER-1",
          "/23308471723/100007-BANNER-1",
          "/23308471723/bimbgames.one-BANNER-1"
        ];

        let slot = null;
        for (const adUnitPath of adUnitPaths) {
          try {
            console.log(`🔍 Trying ad unit: ${adUnitPath}`);
            slot = window.googletag.defineSlot(
              adUnitPath,
              [
                [300, 250],
                [336, 280],
                [320, 50],
                [728, 90]
              ],
              divId
            );
            if (slot) {
              console.log(`✅ Successfully defined slot with: ${adUnitPath}`);
              break;
            }
          } catch (error) {
            console.warn(`⚠️ Failed to define slot with: ${adUnitPath}`, error);
          }
        }

        if (slot) {
          slot.addService(window.googletag.pubads());
          window.googletag.display(divId);
          isInitialized.current = true;
          setAdStatus("loaded");
          console.log("✅ Google Ad Manager ad displayed");
          
          // Check if ad actually loaded after a delay
          setTimeout(() => {
            const adElement = document.getElementById(divId);
            if (adElement && adElement.children.length === 0) {
              console.warn("⚠️ Ad container is empty - ad may not have loaded");
              setAdStatus("empty");
            }
          }, 3000);
        } else {
          console.error("❌ Failed to create any ad slot");
          setAdStatus("error");
        }
      } catch (error) {
        console.error("❌ Ad initialization error:", error);
        setAdStatus("error");
      }
    });

    // Cleanup function
    return () => {
      console.log("🧹 Component cleanup");
    };
  }, []);

  return (
    <div className="ad-container" style={{ margin: "10px 0" }}>
      <div
        ref={adRef}
        id="div-gpt-ad-1747205351334-0"
        style={{ 
          minWidth: "300px", 
          minHeight: "90px", 
          textAlign: "center",
          border: "1px solid #ddd",
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {adStatus === "loading" && (
          <div style={{ color: "#666", fontSize: "14px" }}>
            Loading ad...
          </div>
        )}
        {adStatus === "empty" && (
          <div style={{ color: "#ff6b6b", fontSize: "14px" }}>
            Ad not available
          </div>
        )}
        {adStatus === "error" && (
          <div style={{ color: "#ff6b6b", fontSize: "14px" }}>
            Ad failed to load
          </div>
        )}
      </div>
      
      {/* Debug info */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ fontSize: "10px", color: "#999", marginTop: "5px", textAlign: "center" }}>
          Status: {adStatus} | Ad Unit: /23308471723/bimbgames-one-BANNER-1
        </div>
      )}
    </div>
  );
}
