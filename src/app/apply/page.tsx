"use client";
import BackHeader from "../BackHeader";
import Ads from "../extra/Ads";
import Link from "next/link";
// import RewardedAd from "../extra/RewardedAd";

export default function ApplyPage() {

  return (
    
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Apply" />

      <Ads />

      {/* Apply Description */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg border border-purple-500/30 mb-4">
          <h3 className="text-white font-bold text-lg mb-3">🎯 Free Fire Application Options</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Choose your preferred application method to access Free Fire resources and tools. Whether you want to use your current account or explore with a different user ID, we provide flexible options for all players.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Link href="/submit">
          <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
            <div className="text-white text-lg font-bold text-center">
              Current Simulator
            </div>
          </button>
        </Link>
        <Link href="/submit">
          <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
            <div className="text-white text-lg font-bold text-center">
              Other User ID
            </div>
          </button>
        </Link>
      </div>

      {/* Free Fire Application Information */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-4 rounded-lg border border-cyan-500/30">
          <h3 className="text-white font-bold text-lg mb-3">🚀 Free Fire Application Process</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Free Fire application process is designed to provide players with access to exclusive resources, tools, and features that enhance their gaming experience. Our platform offers multiple ways to connect and utilize Free Fire services.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Current Simulator option allows you to use your existing Free Fire account to access our tools and resources. This method is perfect for players who want to integrate our services with their current gameplay and progress.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The Other User ID option provides flexibility for players who want to explore different accounts or test our services with alternative Free Fire profiles. This is ideal for content creators, streamers, or players managing multiple accounts.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Our application system is secure and user-friendly, ensuring that your Free Fire data remains protected while providing seamless access to our platform's features. We support all major Free Fire regions and account types.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Once you complete the application process, you'll gain access to exclusive Free Fire tools, resources, and features that can help improve your gameplay, track your progress, and connect with the global Free Fire community!
          </p>
        </div>
      </div>
    </div>
  );
}
