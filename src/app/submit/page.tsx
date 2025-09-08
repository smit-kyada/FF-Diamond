"use client";
// app/tools/page.tsx
import BackHeader from "../BackHeader";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Ads from "../extra/Ads";
// import RewardedAd from "../extra/RewardedAd";

export default function SubmitPage() {
  const [userId, setUserId] = useState("");
  const router = useRouter();
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (userId.trim() !== '') {
      router.push('/success')
    }
  }

  return (
    <div className="max-w-[390px] sm:max-w-[360px] mx-auto pt-24 flex flex-col gap-5">
      {/* <RewardedAd /> */}
      <BackHeader title="Submit" />

      <Ads />

      <div className="border-y border-white/15 backdrop-blur pt-6 pb-3 px-6 mt-3 mb-6 relative overflow-hidden">
        <div className="text-white text-base font-semibold pe-3">
          Enter your <span className="text-[#8574E0]">Username</span> or <br />{" "}
          <span className="text-[#8574E0]">User ID</span> to Unlock Rewards.
        </div>
        <form className="relative pt-5" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 rounded-[42px] pl-10 border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter User Id"
              value={userId}
              required
              onChange={(e) => setUserId(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                type="text"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user text-base-content/80"
              >
                <path d="M20 21V19a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
          </div>
          <button
            type="submit"
            className="w-full flex bg-[#34A852] rounded-[42px] items-center justify-center mt-4 py-3 cursor-pointer"
          >
            <span className="text-white text-base font-bold leading-5">
              SUBMIT
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
