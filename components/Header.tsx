"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-cream text-white py-4 max-w-md mx-auto w-full">
      <div className="flex justify-center">
        <Link href="/" aria-label="Home">
          <Image src="/images/Logo.svg" alt="Re_pair logo" width={100} height={100} />
        </Link>
      </div>
    </header>
  );
}
