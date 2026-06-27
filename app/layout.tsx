import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "CV of a Faustas",
  description:
    "Interactive developer portfolio built around motion, clarity, and system thinking.",
};

const analyticsEnabled = Boolean(GA_ID && !GA_ID.includes("XXXXXXXXXX"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="manual-scroll-restoration" strategy="beforeInteractive">
          {`if ("scrollRestoration" in history) history.scrollRestoration = "manual";`}
        </Script>
        {analyticsEnabled ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
