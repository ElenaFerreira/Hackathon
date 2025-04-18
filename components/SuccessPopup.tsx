"use client";
import { CheckCircleIcon } from "lucide-react";

export function SuccessPopup() {
  return (
    <div className="flex items-center space-x-2 bg-white border border-primary rounded-full px-4 py-1 text-sm shadow max-w-fit mx-auto mt-4">
      <CheckCircleIcon className="w-4 h-4 text-primary" />
      <p className="text-sm">
        <span className="text-primary font-semibold">Bravo !</span> <span className="text-black">Ton article est prêt à être réparé.</span>
      </p>
    </div>
  );
}
