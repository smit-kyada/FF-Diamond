"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      apiReady?: boolean;
      sizeMapping: () => {
        addSize: (viewport: number[], sizes: number[][]) => unknown;
        build: () => unknown;
      };
      pubads: () => {
        setLocation: (location: string) => void;
        setTargeting: (key: string, value: string) => void;
        enableSingleRequest: () => void;
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
        defineSizeMapping: (mapping: unknown) => unknown;
        addService: (service: unknown) => void;
      };
      destroySlots: (slots?: unknown[]) => void;
      enableServices: () => void;
      display: (divId: string) => void;
    };
  }
}

interface AdsProps {
  adUnitPath?: string;
  sizes?: number[][];
  className?: string;
  style?: React.CSSProperties;
}

export default function Ads({ 
  adUnitPath = "/23308471723/bimbgames-one-BANNER-1",
  sizes = [[300,250],[336,280],[780,250],[750,250],[728,90],[970,250],[970,90],[1200,250]],
  className = "",
  style = {}
}: AdsProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);
  const currentSlot = useRef<unknown>(null);
  const [adStatus, setAdStatus] = useState("loading");
  const pathname = usePathname();
  
  // Generate unique div ID based on pathname and timestamp
  const divId = `div-gpt-ad-${pathname.replace(/\//g, '-')}-${Date.now()}`;

  useEffect(() => {
    console.log(`🚀 Initializing Google Ad Manager ad for: ${pathname} (Unique ID: ${divId})`);

    // Load GPT script if not already loaded
    if (!document.getElementById("gpt-script")) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Initialize googletag
    window.googletag = window.googletag || { cmd: [] };

    // Wait for the DOM element to be available
    const initializeAd = () => {
      // Check if the div element exists in the DOM
      const adElement = document.getElementById(divId);
      if (!adElement) {
        console.log(`⏳ Waiting for DOM element: ${divId}`);
        setTimeout(initializeAd, 100);
        return;
      }

      console.log(`✅ DOM element found: ${divId}`);

      window.googletag.cmd.push(() => {
        try {
          // Create responsive size mapping
          const sizeMappingBuilder = window.googletag.sizeMapping() as {
            addSize: (viewport: number[], sizes: number[][]) => typeof sizeMappingBuilder;
            build: () => unknown;
          };
          const mapping = sizeMappingBuilder
            .addSize([1280, 768], [[1200, 250]])
            .addSize([1024, 768], [[970, 90], [970, 250]])
            .addSize([800, 450], [[780, 250], [750, 250], [728, 90]])
            .addSize([0, 0], [[300, 250], [336, 280]])
            .build();

          console.log(`🔍 Creating ad slot with: ${adUnitPath} for div: ${divId}`);

          const slot = window.googletag.defineSlot(
            adUnitPath,
            sizes,
            divId
          );

          if (slot) {
            // Store reference to current slot for cleanup
            currentSlot.current = slot;
            
            // Apply size mapping and add service
            const slotWithMapping = slot as {
              defineSizeMapping: (mapping: unknown) => typeof slotWithMapping;
              addService: (service: unknown) => void;
            };
            slotWithMapping.defineSizeMapping(mapping).addService(window.googletag.pubads());

            // Collapse empty divs
            window.googletag.pubads().collapseEmptyDivs();
            
            // Add event listeners for debugging
            const pubads = window.googletag.pubads();
            if (pubads.addEventListener) {
              pubads.addEventListener('slotRequested', (event: unknown) => {
                const slotEvent = event as { slot: { getSlotElementId: () => string } };
                if (slotEvent.slot.getSlotElementId() === divId) {
                  console.log('📡 Ad slot requested:', slotEvent.slot.getSlotElementId());
                }
              });
              
              pubads.addEventListener('slotResponseReceived', (event: unknown) => {
                const slotEvent = event as { slot: { getSlotElementId: () => string } };
                if (slotEvent.slot.getSlotElementId() === divId) {
                  console.log('📨 Ad response received:', slotEvent.slot.getSlotElementId());
                }
              });
              
              pubads.addEventListener('slotRenderEnded', (event: unknown) => {
                const slotEvent = event as { 
                  slot: { getSlotElementId: () => string }; 
                  isEmpty: boolean 
                };
                if (slotEvent.slot.getSlotElementId() === divId) {
                  console.log('🎯 Ad render ended:', slotEvent.slot.getSlotElementId(), 'Empty:', slotEvent.isEmpty);
                  if (slotEvent.isEmpty) {
                    console.warn('⚠️ Ad slot is empty - no ad was served');
                    setAdStatus("empty");
                  } else {
                    console.log('✅ Ad successfully rendered');
                    setAdStatus("loaded");
                  }
                }
              });
            }

            // Enable services and display
            window.googletag.enableServices();
            window.googletag.display(divId);
            isInitialized.current = true;
            console.log(`✅ Google Ad Manager ad slot created and displayed for: ${divId}`);
            
          } else {
            console.error("❌ Failed to create ad slot");
            setAdStatus("error");
          }
        } catch (error) {
          console.error("❌ Ad initialization error:", error);
          setAdStatus("error");
        }
      });
    };

    // Start the initialization process
    initializeAd();

    // Cleanup function - destroy slot when component unmounts
    return () => {
      console.log(`🧹 Component cleanup for: ${divId}`);
      
      if (currentSlot.current && window.googletag) {
        try {
          window.googletag.cmd.push(() => {
            window.googletag.destroySlots([currentSlot.current]);
            console.log(`🗑️ Destroyed ad slot: ${divId}`);
          });
        } catch (error) {
          console.warn("⚠️ Error destroying ad slot:", error);
        }
      }
      
      // Reset initialization flag
      isInitialized.current = false;
      currentSlot.current = null;
    };
  }, [pathname, divId, adUnitPath, sizes]);

  return (
    <div className={`ad-container ${className}`} style={{ margin: "10px 0", ...style }}>
      <div
        ref={adRef}
        id={divId}
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
        {/* Only show error states, no loading message */}
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
          Status: {adStatus} | Ad Unit: {adUnitPath} | ID: {divId}
        </div>
      )}
    </div>
  );
}
