import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gas Piping, Commercial Kitchen Setup & Extractor Hood Installation in Abuja,FCT | Sanity Prime Technologies",
  description: "Professional kitchen equipment repair, gas piping, extractor hood installation, and complete commercial kitchen setup services for restaurants and homes.",
  keywords: [
    "kitchen equipment repair",
    "commercial kitchen gas installation",
    "gas piping services",
    "extractor hood installation",
    "commercial kitchen setup",
    "restaurant kitchen installation",
    "kitchen ventilation systems",
    "gas cooker installation",
    "industrial kitchen maintenance",
  ],

  authors: [{ name: "Tobi.Dev for Sanity Prime Tech." }],

  openGraph: {
    title: "Commercial Kitchen Equipment Installation & Gas Installation",
    description:
      "Experts in kitchen setup services, gas piping installation, and extractor hood systems.",
    url: "https://sanityprime.com",
    siteName: "Sanity Prime Tech",
    images: [{ url: "https://sanityprime.com/og.png" }],
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
