"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CheckCircleIcon, ShirtIcon, HammerIcon } from "lucide-react";

export default function Step1Page() {
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      sessionStorage.setItem("scan-photo-url", url);
      sessionStorage.removeItem("add_form");
      router.push("/add/step2");
    }
  };

  return (
    <div className="bg-cream max-w-md mx-auto px-4 py-6 space-y-6">
      {/* Étapes */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex flex-col items-center space-y-1">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span className="text-green-600 font-semibold">Scan</span>
        </div>
        <div className="h-px flex-1 bg-gray-300 mx-1"></div>
        <div className="flex flex-col items-center space-y-1">
          <ShirtIcon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Infos</span>
        </div>
        <div className="h-px flex-1 bg-gray-300 mx-1"></div>
        <div className="flex flex-col items-center space-y-1">
          <HammerIcon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Répare</span>
        </div>
      </div>

      {/* Upload */}
      <div className="flex flex-col items-center space-y-4">
        <label
          htmlFor="fileInput"
          className="cursor-pointer w-full aspect-[4/3] bg-gray-100 border border-dashed border-gray-400 rounded-xl flex items-center justify-center text-sm text-gray-500"
        >
          📷 Appuyer pour prendre une photo
        </label>
        <input id="fileInput" type="file" accept="image/*" capture="environment" onChange={handleImageUpload} className="hidden" />
      </div>
    </div>
  );
}
