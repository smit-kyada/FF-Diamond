import "./globals.css";
import type { Metadata } from "next";

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

        {/* Neu Icons CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/neuicons/css/neu.min.css"
        />

        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L7LWYD1HES"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L7LWYD1HES');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "t80iwc51ct");
          `,
          }}
        />
      </head>
      <body className="body-bg">
        
        {children}

        {/* Toastify container (optional) */}
        <div className="Toastify" />
      </body>
    </html>
  );
}
