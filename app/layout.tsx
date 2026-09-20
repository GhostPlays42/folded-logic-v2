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

// Beefed up Local SEO Metadata
export const metadata: Metadata = {
  title: "Folded Logic | Intelligent Web Solutions",
  description: "Custom web design and full-stack software development based in Peachland, BC. Proudly serving West Kelowna, Kelowna, the broader Okanagan, and British Columbia.",
  keywords: [
    "web design", 
    "software development", 
    "Folded Logic", 
    "Peachland", 
    "West Kelowna", 
    "Kelowna", 
    "Central Okanagan", 
    "British Columbia",
    "Next.js developer"
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}