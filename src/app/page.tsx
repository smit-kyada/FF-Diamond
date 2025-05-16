// app/page.tsx
"use client";

import AdPopupModal from "./extra/AdPopupModal";
import Ads from "./extra/Ads";
import "./globals.css";
import Link from "next/link";
import RewardedAd from "./extra/RewardedAd";

export default function HomePage() {

  return (
    <>
      <RewardedAd />
      <AdPopupModal />
      <div className="maindiv">
        <div className="flex flex-col gap-6 mx-auto h-max ls:w-[360px] pb-10 container">
          {/* Logo */}
          <div className="flex items-center justify-center font-semibold">
            <img
              alt="Logo"
              className="w-36 cursor-pointer"
              src="/resources/logo.png"
            />
          </div>

          {/* Ad Banner */}
          <Ads />

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center px-5 pt-10 cursor-pointer">
            <Link href="/tools">
              <img src="/resources/buttons/home-btn.png" className="w-full" />
            </Link>
          </div>

          <div className="flex items-center justify-center px-5 pt-[8px] cursor-pointer">
            <Link href="/elite-booyah-pass">
              <img src="/resources/buttons/elite-home.png" className="w-full" />
            </Link>
          </div>

          <div className="flex items-center justify-center px-5 pt-[8px] cursor-pointer">
            <Link href="/free-diamonds-coin">
              <img src="/resources/buttons/coin-home.png" className="w-full" />
            </Link>
          </div>

          {/* Disclaimer Link */}
          <Link href="/disclaimer">
            <div className="flex justify-center pt-10">
              <div className="border-b-2 border-blue-500 text-[15px] font-bold text-blue-500 text-center w-fit hover:text-blue-400 hover:border-blue-400 transition-colors">
                Disclaimer
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
