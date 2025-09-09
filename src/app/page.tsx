// app/page.tsx
"use client";

// import AdPopupModal from "./extra/AdPopupModal";
import Ads from "./extra/Ads";
import "./globals.css";
import Link from "next/link";
// import RewardedAd from "./extra/RewardedAd";

export default function HomePage() {

  return (
    <>
      {/* <RewardedAd /> */}
      {/* <AdPopupModal /> */}
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

          {/* Welcome Section */}
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold text-white mb-2">FF Diamond Tool</h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Unlock exclusive Free Fire character skins, weapons, pets, and emotes. 
              Get free diamonds and coins to enhance your gaming experience!
            </p>
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

          {/* Free Fire Information Section */}
          <div className="px-4 pt-8">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-500/30">
              <h3 className="text-white font-bold text-lg mb-3">🔥 Free Fire Battle Royale</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible. Drive vehicles to explore the vast map, hide in trenches, or become invisible by proning under grass or rifts.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Search for weapons, stay in the play zone, loot your enemies and become the last man standing. Along the way, go for legendary airdrops while avoiding airstrikes to gain that little edge against other players.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                With over 1 billion downloads, Free Fire has become one of the most popular mobile battle royale games worldwide, featuring unique characters with special abilities and a wide variety of weapons and equipment.
              </p>
            </div>
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
