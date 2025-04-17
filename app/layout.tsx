import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Refashion Repair",
  description: "Join the movement to repair your clothes and shoes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pb-20">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
