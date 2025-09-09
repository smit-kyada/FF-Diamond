"use client";

import Link from "next/link";

// app/disclaimer/page.tsx
 
import { useRouter } from "next/navigation";

export default function DisclaimerPage() {
  const router = useRouter();
  return (
    <div>
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[390px] sm:w-[360px] py-0 z-50">
        <div className="z-50 border-b border-b-[#E0E0E0] py-4 px-6 flex items-center justify-between sticky top-0 backdrop-blur">
          <svg
            onClick={() => router.back()}
            className="flex-shrink-0 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.57 5.93L3.5 12l6.07 6.07"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 12H3.67"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-white text-lg leading-[26px] uppercase font-semibold">
            Disclaimer
          </div>
          <Link href="/">
            <div className="flex items-center justify-center size-6 flex-shrink-0">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="M18.04 4.82L12.28.79c-1.57-1.1-3.98-1.04-5.49.13L1.78 4.83C.78 5.61-.01 7.21-.01 8.47v6.9C-.01 17.92 2.06 20 4.61 20h10.78C17.94 20 20.01 17.93 20.01 15.38V8.6c0-1.35-.87-3.01-1.97-3.78ZM10.75 16a.75.75 0 1 1-1.5 0v-3a.75.75 0 1 1 1.5 0v3Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col text-white gap-6 mx-auto h-max w-[360px] pb-10 pt-[100px] font-medium">
        <div className="font-bold text-xl">Disclaimer</div>
        
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="font-semibold mb-2">Important Notice:</div>
          <div>
            This is not an official Free Fire website. This website is developed purely for
            entertainment and educational purposes.
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">About This Website:</div>
          <div>
            This is a guide and informative website that helps you learn about
            Free Fire characters, weapons, pets, emotes, and game strategies to improve your gameplay.
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Privacy & Data:</div>
          <div>We don't collect any user personal information. Your privacy is important to us.</div>
        </div>

        <div>
          <div className="font-semibold mb-2">Content & Images:</div>
          <div>
            All images and content on the website are sourced from public domains. These
            materials are not endorsed by their respective owners and are used solely
            for informational and entertainment purposes.
          </div>
        </div>

        <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
          <div className="font-semibold mb-2 text-red-300">Legal Notice:</div>
          <div>
            We are not providing any cheats, hacks, or unauthorized modifications of any games or apps. 
            This website is not associated with Garena or any official Free Fire entities. 
            All property rights are owned by their respective holders.
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Contact & Support:</div>
          <div>
            If you have any suggestions, issues, or questions about this website, please
            feel free to contact us through our support channels.
          </div>
        </div>
      </div>
    </div>
  );
}
