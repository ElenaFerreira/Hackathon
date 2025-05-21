"use client";
import Image from "next/image";
import { PencilIcon, ScanIcon, LeafIcon, CoinsIcon, HammerIcon } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="bg-cream min-h-screen px-4 py-6 mx-auto w-full space-y-4">
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="relative w-28 h-28">
          <div className="w-28 h-28 rounded-full overflow-hidden relative">
            <Image src="/images/profile.png" alt="Avatar" fill className="object-cover rounded-full" />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full shadow-md">
            <PencilIcon className="size-5" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-lg">Noé Dumas</h3>
      </div>

      {/* Mes réparations */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Historique de mes scans</h2>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          {[7, 12, 18, 21].map((days, i) => (
            <div key={i} className="flex-shrink-0 w-32 rounded-2xl overflow-hidden bg-white shadow mb-1">
              <Image
                src={`/images/repair-${i + 1}.jpg`}
                alt="Réparation"
                width={128}
                height={96}
                className="w-full h-[180px] object-cover rounded-bl-2xl rounded-br-2xl"
              />
              <p className="text-xs text-center py-2 text-gray-600">il y a {days} jours</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistiques */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Mes accomplissements </h2>
        <div className="flex items-center space-x-3">
          <div className="bg-white w-8 h-8 rounded-xl flex items-center justify-center shadow">
            <ScanIcon className="w-4 h-4 text-black" />
          </div>
          <p className="text-sm">
            <span className="text-primary font-semibold">63</span> scans effectués
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white w-8 h-8 rounded-xl flex items-center justify-center shadow">
            <HammerIcon className="w-4 h-4 text-black" />
          </div>
          <p className="text-sm">
            <span className="text-primary font-semibold">20</span> articles réparés
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white w-8 h-8 rounded-xl flex items-center justify-center shadow">
            <LeafIcon className="w-4 h-4 text-black" />
          </div>
          <p className="text-sm">
            <span className="text-primary font-semibold">6,2kg</span> de CO2 évités
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white w-8 h-8 rounded-xl flex items-center justify-center shadow">
            <CoinsIcon className="w-4 h-4 text-black" />
          </div>
          <p className="text-sm">
            <span className="text-primary font-semibold">89€</span> économisés
          </p>
        </div>
      </div>

      {/* Tutos créés */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Mes tutos</h2>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          {[1, 2].map((tuto, i) => (
            <div key={i} className="flex-shrink-0 w-56 bg-white rounded-2xl shadow mb-1">
              <div className="relative">
                <Image
                  src={`/images/tuto-${i + 1}.jpg`}
                  alt="Tuto"
                  width={224}
                  height={126}
                  className="w-full h-32 object-cover rounded-xl border border-solid border-black"
                />
                <div className="absolute top-1 left-1 bg-white text-black text-xs px-2 py-0.5 rounded-full">06:32</div>
              </div>
              <div className="p-2">
                <p className="text-sm font-medium leading-tight">Que faire de mes textiles et chaussures usagés ?</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="relative w-5 h-5">
                    <Image src="/images/profile.png" alt="Avatar" fill className="object-cover rounded-full" />
                  </div>
                  <p className="text-xs text-gray-500">Noé Dumas</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm cursor-pointer">Créer un tutoriel</button>
        </div>
      </div>
    </div>
  );
}
