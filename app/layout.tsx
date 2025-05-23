import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Re_pair",
  description: "Donner aux 15-25 ans le pouvoir d’agir par l’auto-réparation – un geste simple, durable et partagé.",
  openGraph: {
    title: "Re_pair",
    description: "Donner aux 15-25 ans le pouvoir d’agir par l’auto-réparation – un geste simple, durable et partagé.",
    url: "https://hackathon-refashion.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://hackathon-refashion.vercel.app/images/home-mobile.png",
        width: 896,
        height: 1492,
        alt: "Re_pair",
      },
    ],
  },
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
      </head>
      <body className="bg-cream flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pb-24 max-w-7xl px-6 py-6 mx-auto w-full bg-cream">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
