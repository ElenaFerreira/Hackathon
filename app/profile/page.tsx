"use client";

import React from "react";
import { Edit2Icon, HeartIcon, ScanIcon, ShirtIcon, PlayIcon } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="bg-cream min-h-screen px-4 py-6 max-w-md mx-auto w-full space-y-6">
      <h1 className="text-xl font-bold text-center">Profil</h1>

      {/* Avatar + nom */}
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <div className="overflow-hidden size-30">
            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" fill className="object-cover rounded-full" />
          </div>
          <div className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
            <Edit2Icon className="size-5 text-gray-700" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg">Luc Maury</h3>
          <p className="text-sm text-gray-600">Modifier le profil</p>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-quinary text-black rounded-xl p-4 flex flex-col items-center justify-center">
          <ScanIcon className="w-6 h-6 mb-1" />
          <p className="text-lg font-bold">63</p>
          <p className="text-sm">Scans</p>
        </div>
        <div className="bg-quaternary text-white rounded-xl p-4 flex flex-col items-center justify-center">
          <PlayIcon className="w-6 h-6 mb-1" />
          <p className="text-lg font-bold">20</p>
          <p className="text-sm">Tutos</p>
        </div>
        <div className="bg-secondary text-black rounded-xl p-4 flex flex-col items-center justify-center">
          <HeartIcon className="w-6 h-6 mb-1" />
          <p className="text-lg font-bold">8</p>
          <p className="text-sm">Favoris</p>
        </div>
        <div className="bg-tertiary text-black rounded-xl p-4 flex flex-col items-center justify-center">
          <ShirtIcon className="w-6 h-6 mb-1" />
          <p className="text-lg font-bold">20</p>
          <p className="text-sm">Réparations</p>
        </div>
      </div>
    </div>
  );
}
