import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greekly - Learn Languages by Reading the News",
  description: "Master new languages naturally by reading simplified news articles. Tap any word for instant translations and pronunciation. Start learning Greek, Spanish, and more today!",
  keywords: ["language learning", "learn Greek", "learn Spanish", "news reading", "language app", "vocabulary builder"],
  authors: [{ name: "S.Z. CODE AXOL LTD" }],
  openGraph: {
    title: "Greekly - Learn Languages by Reading the News",
    description: "Master new languages naturally by reading simplified news articles. Tap any word for instant translations and pronunciation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greekly - Learn Languages by Reading the News",
    description: "Master new languages naturally by reading simplified news articles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
