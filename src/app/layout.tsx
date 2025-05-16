import "./globals.css";
import type { Metadata } from "next";
import HeadRewardLoader from "./extra/HeadRewardLoader";

export const metadata: Metadata = {
  title: "Get Diamonds",
  description:
    "Tools for Free Fire players: characters, weapons, pets, emotes, and diamonds!",
  icons: "/resources/Diamond.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/resources/Diamond.png" />
        <meta name="theme-color" content="#0d6efd" />

        {/* AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8015558724608474"
          crossOrigin="anonymous"
        ></script>

        {/* Neu Icons CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/neuicons/css/neu.min.css"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2G4VSVX');
          `,
          }}
        />
      </head>
      <body className="body-bg">
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2G4VSVX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <HeadRewardLoader />
        {children}

        {/* Toastify container (optional) */}
        <div className="Toastify" />
      </body>
    </html>
  );
}
