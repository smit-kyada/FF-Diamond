"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    const divId = "div-gpt-ad-1747205351334-0";

    // Clear previous ad contents
    const adDiv = document.getElementById(divId);
    if (adDiv) adDiv.innerHTML = "";

    // Load GPT script if not already
    if (!document.getElementById("gpt-script")) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    const interval = setInterval(() => {
      if (window.googletag && window.googletag.apiReady) {
        clearInterval(interval);

        window.googletag = window.googletag || { cmd: [] };

        window.googletag.cmd.push(() => {
          // Destroy previous slots
          const slots = window.googletag.pubads().getSlots?.() || [];
            const bannerSlot = slots.find((s) =>
              s.getSlotElementId?.() === divId
            );
            if (bannerSlot) {
              window.googletag.destroySlots([bannerSlot]);
            }
          // Define and display slot
          window.googletag
            .defineSlot(
              "/23308471723/bimbgames-one-BANNER-1",
              [
                [300, 250],
                [336, 280],
              ],
              divId
            )
            .addService(window.googletag.pubads());
          window.googletag.display(divId);
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <div
      id="div-gpt-ad-1747205351334-0"
      style={{ minWidth: "300px", minHeight: "90px" , textAlign: "center" }}
    />
  );
}
