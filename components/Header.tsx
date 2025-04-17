import React from "react";
import { ScissorsIcon } from "lucide-react";
export function Header() {
  return (
    <header className="bg-emerald-600 text-white p-4 shadow-md max-w-md mx-auto w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ScissorsIcon size={24} />
          <h1 className="text-xl font-bold">Refashion Repair</h1>
        </div>
        <div className="text-xs bg-emerald-700 px-2 py-1 rounded-full">Repair • Reuse • Revive</div>
      </div>
    </header>
  );
}
