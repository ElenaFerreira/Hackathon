import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Re_pair",
  description: "Join the movement to repair your clothes and shoes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#faf4f2" />
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Re_pair" />
        {/* <link rel="manifest" href="/images/favicon/site.webmanifest" /> */}
      </head>
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pb-20">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
