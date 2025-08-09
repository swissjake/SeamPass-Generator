import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import "@seampass/tailwind-config/styles";
import GoogleAnalytics from "./components/googleAnalytics";
import type { JSX } from "react";

export const metadata: Metadata = {
  title:
    "SeamPass - Free Password Generator | Create Strong & Secure Passwords",
  description:
    "Generate strong, secure, and memorable passwords instantly with SeamPass. Free online password generator with strength analysis, customizable options, and 100% client-side security. Create random passwords and memorable passphrases.",
  keywords: [
    "password generator",
    "secure password",
    "random password",
    "memorable password",
    "strong password",
    "password strength",
    "online password generator",
    "free password generator",
    "password security",
    "passphrase generator",
    "password tool",
    "cybersecurity",
    "digital security",
    "password creation",
  ],
  authors: [{ name: "SeamPass Team" }],
  creator: "SeamPass",
  publisher: "SeamPass",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://seampass.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "SeamPass - Free Password Generator | Create Strong & Secure Passwords",
    description:
      "Generate strong, secure, and memorable passwords instantly with SeamPass. Free online password generator with strength analysis and 100% client-side security.",
    url: "https://seampass.com",
    siteName: "SeamPass",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SeamPass Password Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SeamPass - Free Password Generator | Create Strong & Secure Passwords",
    description:
      "Generate strong, secure, and memorable passwords instantly with SeamPass. Free online password generator with strength analysis.",
    images: ["/og-image.png"],
    creator: "@seampass",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE,
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1A8CFF" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for Password Generator Tool */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "SeamPass Password Generator",
              description:
                "Generate strong, secure, and memorable passwords instantly with SeamPass. Free online password generator with strength analysis and 100% client-side security.",
              url: "https://seampass.com",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Random Password Generation",
                "Memorable Password Creation",
                "Password Strength Analysis",
                "Customizable Password Options",
                "Copy to Clipboard",
                "100% Client-Side Security",
              ],
              author: {
                "@type": "Organization",
                name: "SeamPass",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              style: {
                background: "#4CAF50",
                color: "#FFFFFF",
              },
            },
            error: {
              style: {
                background: "#EFEFEF",
                color: "#BE2921",
              },
            },
          }}
        />
        {children}

        {GA_MEASUREMENT_ID ? (
          <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        ) : (
          // Add this temporarily to debug
          <script
            dangerouslySetInnerHTML={{
              __html: `console.log('GA_MEASUREMENT_ID is missing or empty');`,
            }}
          />
        )}
      </body>
    </html>
  );
}
