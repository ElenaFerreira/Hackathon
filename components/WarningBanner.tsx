"use client";
import { InfoIcon } from "lucide-react";

export function WarningBanner() {
  return (
    <div className="flex items-center space-x-2 bg-white border border-primary rounded-full px-4 py-1 text-sm shadow max-w-fit">
      <InfoIcon className="w-4 h-4 text-primary" />
      <p className="text-sm">
        <span className="text-primary font-semibold">Scanne bien les défauts</span> <span className="text-black">de ton article !</span>
      </p>
    </div>
  );
}
