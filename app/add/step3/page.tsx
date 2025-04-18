// app/add/step3/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CheckCircleIcon, ShirtIcon, HammerIcon } from "lucide-react";

export default function Step3Page() {
  const router = useRouter();
  const [tools, setTools] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTool = (tool: string) => {
    setTools((prev) => (prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const handleFinish = () => {
    router.push("/add/confirmation");
  };

  return (
    <div className="bg-cream max-w-md mx-auto px-4 py-6 space-y-6">
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
          <HammerIcon className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold">Répare</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="font-semibold text-sm">Place à la réparation !</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Jean", icon: <ShirtIcon className="w-4 h-4" /> },
              { label: "Denim", icon: <ShirtIcon className="w-4 h-4" /> },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => toggleTag(label)}
                className={`flex items-center px-3 py-2 border rounded-xl text-sm space-x-2 ${
                  selectedTags.includes(label) ? "bg-primary text-white border-primary" : "border-primary text-black"
                }`}
              >
                <span className={selectedTags.includes(label) ? "text-white" : "text-primary"}>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => toggleTag("Trou dans la poche droite")}
              className={`flex items-center px-3 py-2 border rounded-xl text-sm space-x-2 col-span-2 ${
                selectedTags.includes("Trou dans la poche droite") ? "bg-primary text-white border-primary" : "border-primary text-black"
              }`}
            >
              <HammerIcon className={`w-4 h-4 ${selectedTags.includes("Trou dans la poche droite") ? "text-white" : "text-primary"}`} />
              <span>Trou dans la poche droite</span>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-sm">Tu auras besoin de ?</h2>
          <div className="grid grid-cols-2 gap-2">
            {["Fil épais", "Machine à coudre", "Patch thermocollant", "Ciseaux de couture"].map((tool) => (
              <button
                key={tool}
                onClick={() => toggleTool(tool)}
                className={`px-3 py-2 rounded-xl text-sm border ${
                  tools.includes(tool) ? "bg-primary text-white border-primary" : "border-blue-200 bg-transparent text-black"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* Tutoriels adaptés  */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold">Tutoriels adaptés</h2>
          <div className="flex space-x-4 overflow-x-auto no-scrollbar">
            {[1, 2].map((tuto, i) => (
              <div key={i} className="flex-shrink-0 w-56 bg-white rounded-2xl shadow mb-1">
                <div className="relative">
                  <Image src={`/images/tuto-${i + 1}.jpg`} alt="Tuto" width={224} height={126} className="w-full h-32 object-cover rounded-xl" />
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
            <button onClick={handleFinish} className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm">
              Terminer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
