import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Refashion Repair",
  description: "Join the movement to repair your clothes and shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pb-20">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
