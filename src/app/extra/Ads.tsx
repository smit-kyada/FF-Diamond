"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      apiReady?: boolean;
      sizeMapping: () => {
        addSize: (viewport: number[], sizes: number[][]) => any;
        build: () => any;
      };
      pubads: () => {
        setLocation: (location: string) => void;
        setTargeting: (key: string, value: string) => void;
        enableSingleRequest: () => void;
        enableLazyLoad: (config: {
          fetchMarginPercent: number;
          renderMarginPercent: number;
          mobileScaling: number;
        }) => void;
        collapseEmptyDivs: () => void;
        getSlots?: () => Array<{
          getSlotElementId: () => string;
        }>;
        addEventListener?: (
          eventName: string,
          callback: (event: unknown) => void
        ) => void;
      };
      defineSlot: (
        adUnitPath: string,
        size: number[] | number[][],
        divId: string
      ) => {
        defineSizeMapping: (mapping: any) => any;
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
    console.log("🚀 Initializing Google Ad Manager ad (HTML Reference Implementation)");

    // Load GPT script - using the same URL as the working HTML
    if (!document.getElementById("gpt-script")) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Initialize googletag exactly like the working HTML
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      try {
        // Create responsive size mapping exactly like the HTML
        const mapping = window.googletag.sizeMapping()
          .addSize([1280, 768], [[1200, 250]])
          .addSize([1024, 768], [[970, 90], [970, 250]])
          .addSize([800, 450], [[780, 250], [750, 250], [728, 90]])
          .addSize([0, 0], [[300, 250], [336, 280]])
          .build();

        // Use the same ad unit path as the working HTML
        const adUnitPath = "/23308471723/gamespowerplay-com-BANNER-1";
        console.log(`🔍 Creating ad slot with: ${adUnitPath}`);

        const slot = window.googletag.defineSlot(
          adUnitPath,
          [[300,250],[336,280],[780,250],[750,250],[728,90],[970,250],[970,90],[1200,250]],
          divId
        );

        if (slot) {
          // Apply size mapping and add service exactly like HTML
          slot.defineSizeMapping(mapping).addService(window.googletag.pubads());
          
          // Enable lazy loading like the HTML
          window.googletag.pubads().enableLazyLoad({
            fetchMarginPercent: 100,
            renderMarginPercent: 50,
            mobileScaling: 2.0
          });

          // Collapse empty divs like the HTML
          window.googletag.pubads().collapseEmptyDivs();
          
          // Add event listeners for debugging
          const pubads = window.googletag.pubads();
          if (pubads.addEventListener) {
            pubads.addEventListener('slotRequested', (event: unknown) => {
              const slotEvent = event as { slot: { getSlotElementId: () => string } };
              console.log('📡 Ad slot requested:', slotEvent.slot.getSlotElementId());
            });
            
            pubads.addEventListener('slotResponseReceived', (event: unknown) => {
              const slotEvent = event as { slot: { getSlotElementId: () => string } };
              console.log('📨 Ad response received:', slotEvent.slot.getSlotElementId());
            });
            
            pubads.addEventListener('slotRenderEnded', (event: unknown) => {
              const slotEvent = event as { 
                slot: { getSlotElementId: () => string }; 
                isEmpty: boolean 
              };
              console.log('🎯 Ad render ended:', slotEvent.slot.getSlotElementId(), 'Empty:', slotEvent.isEmpty);
              if (slotEvent.isEmpty) {
                console.warn('⚠️ Ad slot is empty - no ad was served');
                setAdStatus("empty");
              } else {
                console.log('✅ Ad successfully rendered');
                setAdStatus("loaded");
              }
            });
          }

          // Enable services and display exactly like HTML
          window.googletag.enableServices();
          window.googletag.display(divId);
          isInitialized.current = true;
          console.log("✅ Google Ad Manager ad slot created and displayed (HTML Reference)");
          
        } else {
          console.error("❌ Failed to create ad slot");
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
          Status: {adStatus} | Ad Unit: /23308471723/gamespowerplay-com-BANNER-1
        </div>
      )}
    </div>
  );
}
