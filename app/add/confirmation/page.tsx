"use client";

import Link from "next/link";
import { CheckCircleIcon } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <div className="bg-cream space-y-8 mx-auto w-full">
      {/* Étapes sous forme d'icônes */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex flex-col items-center space-y-1">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span className="text-green-600 font-semibold">Scan</span>
        </div>
        <div className="h-px flex-1 bg-gray-300 mx-1"></div>
        <div className="flex flex-col items-center space-y-1">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span className="text-green-600 font-semibold">Infos</span>
        </div>
        <div className="h-px flex-1 bg-gray-300 mx-1"></div>
        <div className="flex flex-col items-center space-y-1">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span className="text-green-600 font-semibold">Répare</span>
        </div>
      </div>

      {/* Message de confirmation */}
      <div className="text-center space-y-4 pt-10">
        <p className="text-lg font-semibold text-green-600">Ton scan est bien enregistré ✅</p>
        <Link href="/" className="text-primary underline text-sm">
          Revenir à l’accueil
        </Link>
      </div>
    </div>
  );
}
