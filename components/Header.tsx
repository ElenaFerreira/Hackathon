"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md max-w-md mx-auto w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="../images/Logo-light.svg" alt="Re_pair logo" width={64} height={64} />
        </div>
        <div className="text-xs bg-quaternary px-2 py-1 rounded-full">Repair • Reuse • Revive</div>
      </div>
    </header>
  );
}
