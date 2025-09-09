"use client";

import { useEffect, useRef, useState } from "react";

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
  sizes = [
    [300, 250],
    [336, 280],
    [780, 250],
    [750, 250],
    [728, 90],
    [970, 250],
    [970, 90],
    [1200, 250],
  ],
  className = "",
  style = {},
}: AdsProps) {
  const currentSlot = useRef<unknown>(null);
  const [adStatus, setAdStatus] = useState("loading");

  // ✅ Stable ID (singleton ad container)
  const divId = "div-gpt-ad-singleton";

  useEffect(() => {
    console.log(`🚀 Initializing ad: ${adUnitPath}`);

    // Load GPT script once
    if (!document.getElementById("gpt-script")) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      document.head.appendChild(script);
    }

    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      try {
        const pubads = window.googletag.pubads();
        if (pubads.getSlots) {
          const allSlots = pubads.getSlots();
          if (allSlots.length > 0) {
            window.googletag.destroySlots(allSlots);
            console.log(`🗑️ Destroyed ${allSlots.length} old slots`);
          }
        }

        // ❌ Removed innerHTML clearing (caused removeChild error)

        // Create responsive size mapping
        const sizeMappingBuilder = window.googletag.sizeMapping() as {
          addSize: (viewport: number[], sizes: number[][]) => typeof sizeMappingBuilder;
          build: () => unknown;
        };
        const mapping = sizeMappingBuilder
          .addSize([0, 0], [[300, 250], [336, 280]])
          .build();

        console.log(`🔍 Creating new ad slot with: ${adUnitPath}`);

        const slot = window.googletag.defineSlot(adUnitPath, sizes, divId);

        if (slot) {
          currentSlot.current = slot;

          const slotWithMapping = slot as {
            defineSizeMapping: (mapping: unknown) => typeof slotWithMapping;
            addService: (service: unknown) => void;
          };

          slotWithMapping
            .defineSizeMapping(mapping)
            .addService(window.googletag.pubads());

          window.googletag.pubads().collapseEmptyDivs();

          const pubads = window.googletag.pubads();
          if (pubads.addEventListener) {
            pubads.addEventListener("slotRenderEnded", (event: unknown) => {
              const slotEvent = event as {
                slot: { getSlotElementId: () => string };
                isEmpty: boolean;
              };
              if (slotEvent.slot.getSlotElementId() === divId) {
                console.log("🎯 Ad render ended - Empty:", slotEvent.isEmpty);
                setAdStatus(slotEvent.isEmpty ? "empty" : "loaded");
              }
            });
          }

          window.googletag.enableServices();
          window.googletag.display(divId);
          console.log(`✅ Ad slot created and displayed`);
        } else {
          console.error("❌ Failed to create ad slot");
          setAdStatus("error");
        }
      } catch (error) {
        console.error("❌ Ad initialization error:", error);
        setAdStatus("error");
      }
    });

    return () => {
      console.log(`🧹 Ads component unmounted`);
    };
  }, [adUnitPath, sizes]);

  return (
    <div className={`ad-container ${className}`} style={{ margin: "10px 0", ...style }}>
      <div
        id={divId}
        style={{
          minWidth: "300px",
          minHeight: "90px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {adStatus === "empty" && (
          <div style={{ color: "#ff6b6b", fontSize: "14px" }}>Ad not available</div>
        )}
        {adStatus === "error" && (
          <div style={{ color: "#ff6b6b", fontSize: "14px" }}>Ad failed to load</div>
        )}
      </div>
      {process.env.NODE_ENV === "development" && (
        <div style={{ fontSize: "10px", color: "#999", marginTop: "5px", textAlign: "center" }}>
          Status: {adStatus} | Ad Unit: {adUnitPath} | ID: {divId}
        </div>
      )}
    </div>
  );
}
