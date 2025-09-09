"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    googletag: any;
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
  const currentSlot = useRef<any>(null);
  const [adStatus, setAdStatus] = useState("loading");
  const initialized = useRef(false);

  // ✅ Stable ID
  const divId = "div-gpt-ad-singleton";

  useEffect(() => {
    if (initialized.current) return; // ✅ Prevents double run in StrictMode
    initialized.current = true;

    console.log(`🚀 Initializing ad: ${adUnitPath}`);

    // Load GPT script only once
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

        // Destroy only if same divId slot exists
        const existingSlots =
          pubads.getSlots?.().filter(
            (slot: any) => slot.getSlotElementId() === divId
          ) || [];
        if (existingSlots.length > 0) {
          window.googletag.destroySlots(existingSlots);
          console.log(`🗑️ Destroyed ${existingSlots.length} old slot(s)`);
        }

        // ✅ Size mapping
        const mapping = window.googletag
          .sizeMapping()
          .addSize([0, 0], [
            [300, 250],
            [336, 280],
          ])
          .build();

        console.log(`🔍 Creating new ad slot with: ${adUnitPath}`);

        const slot = window.googletag.defineSlot(adUnitPath, sizes, divId);
        if (slot) {
          currentSlot.current = slot;

          slot.defineSizeMapping(mapping).addService(pubads);

          pubads.collapseEmptyDivs();

          pubads.addEventListener("slotRenderEnded", (event: any) => {
            if (event.slot.getSlotElementId() === divId) {
              console.log("🎯 Ad render ended - Empty:", event.isEmpty);
              setAdStatus(event.isEmpty ? "empty" : "loaded");
            }
          });

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
    <div
      className={`ad-container ${className}`}
      style={{ margin: "10px 0", ...style }}
    >
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
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            fontSize: "10px",
            color: "#999",
            marginTop: "5px",
            textAlign: "center",
          }}
        >
          Status: {adStatus} | Ad Unit: {adUnitPath} | ID: {divId}
        </div>
      )}
    </div>
  );
}
