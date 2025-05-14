"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      pubads: () => {
        setLocation: (location: string) => void;
        enableSingleRequest: () => void;
        addEventListener?: (eventName: string, callback: (...args: any[]) => void) => void;
      };
      defineSlot: (
        adUnitPath: string,
        size: number[] | number[][],
        divId: string
      ) => {
        addService: (service: any) => void;
      };
      enableServices: () => void;
      display: (divId: string) => void;
      apiReady?: boolean;
    };
  }
}


export default function Ads() {
  useEffect(() => {
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
          const urlParams = new URLSearchParams(window.location.search);
          const shouldSpoof =
            urlParams.get("key") === "showads";

          if (shouldSpoof) {
            const testLocations = [
              "California, US", "Texas, US", "Florida, US", "New York, US", "Ohio, US",
              "Georgia, US", "Michigan, US", "Pennsylvania, US", "North Carolina, US",
              "Illinois, US", "Victoria, AU", "Melbourne, AU", "Toronto, CA",
              "Ottawa, CA", "Wellington, NZ"
            ];
            const randomLoc =
              testLocations[Math.floor(Math.random() * testLocations.length)];
            window.googletag.pubads().setLocation(randomLoc);
            console.log("Ad location spoofed to:", randomLoc);
          }

          window.googletag
            .defineSlot(
              "/23067172299/acetech_banner_1",
              [
                [1024, 768],
                [728, 90],
                [750, 200],
                [970, 90],
                [970, 250],
                [300, 250],
                [336, 280],
              ],
              "div-gpt-ad-1747205351334-0"
            )
            .addService(window.googletag.pubads());

          window.googletag.pubads().enableSingleRequest();
          window.googletag.enableServices();

          window.googletag.display("div-gpt-ad-1747205351334-0");
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="div-gpt-ad-1747205351334-0"
      style={{ minWidth: "300px", minHeight: "90px" }}
    />
  );
}
