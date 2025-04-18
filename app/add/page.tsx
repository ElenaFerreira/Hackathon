"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircleIcon, ShirtIcon, HammerIcon, TagIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function AddPage() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ type: "", matiere: "", reparation: "" });
  const [tools, setTools] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleTool = (tool: string) => {
    setTools((prev) => (prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
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
          {step >= 2 ? <CheckCircleIcon className="w-5 h-5 text-green-500" /> : <ShirtIcon className="w-5 h-5 text-gray-400" />}
          <span className={step >= 2 ? "text-green-600 font-semibold" : "text-gray-400"}>Infos</span>
        </div>
        <div className="h-px flex-1 bg-gray-300 mx-1"></div>
        <div className="flex flex-col items-center space-y-1">
          {step === 3 ? <CheckCircleIcon className="w-5 h-5 text-green-500" /> : <HammerIcon className="w-5 h-5 text-gray-400" />}
          <span className={step === 3 ? "text-green-600 font-semibold" : "text-gray-400"}>Répare</span>
        </div>
      </div>

      {/* Upload image */}
      {step === 1 && (
        <div className="flex flex-col items-center space-y-4">
          <label
            htmlFor="fileInput"
            className="cursor-pointer w-full aspect-[4/3] bg-gray-100 border border-dashed border-gray-400 rounded-xl flex items-center justify-center text-sm text-gray-500"
          >
            📷 Appuyer pour prendre une photo
          </label>
          <input id="fileInput" type="file" accept="image/*" capture="environment" onChange={handleImageUpload} className="hidden" />
        </div>
      )}

      {/* Aperçu photo + mini formulaire */}
      {step === 2 && photo && (
        <div className="space-y-4">
          <img src={photo} alt="Aperçu de la photo" className="w-full rounded-xl object-cover" style={{ aspectRatio: "4 / 3" }} />
          <div className="space-y-3">
            {[
              {
                name: "type",
                value: form.type,
                onChange: handleChange,
                icon: <ShirtIcon className="absolute left-3 top-3 size-5 text-primary" />,
                placeholder: "Type d'article",
                options: ["T-shirt", "Pantalon", "Chaussure", "Veste", "Sac", "Ceinture", "Chapeau", "Autre"],
              },
              {
                name: "matiere",
                value: form.matiere,
                onChange: handleChange,
                icon: <TagIcon className="absolute left-3 top-3 size-5 text-primary" />,
                placeholder: "Matière principale",
                options: ["Coton", "Jean", "Cuir", "Laine", "Polyester", "Nylon", "Synthétique", "Toile", "Autre"],
              },
              {
                name: "reparation",
                value: form.reparation,
                onChange: handleChange,
                icon: <HammerIcon className="absolute left-3 top-3 size-5 text-primary" />,
                placeholder: "Type de défauts",
                options: ["Troué", "Brulé", "Fermeture cassée", "Tâche d'encre", "Tâche d'herbe", "Fil tiré", "Bouton manquant", "Autre"],
              },
            ].map((field, idx) => (
              <div key={idx} className="relative w-full">
                {field.icon}
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full pl-14 pr-8 py-3 border border-gray-300 rounded-md text-sm bg-white appearance-none"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button onClick={() => setStep(3)} className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm mx-auto block">
              Suivant
            </button>
          </div>
        </div>
      )}

      {/* Étape 3 - sélection des outils */}
      {step === 3 && (
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
              <button onClick={() => setStep(4)} className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm">
                Terminer
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-green-600">Ton scan est bien enregistré ✅</p>
          <Link href="/" className="text-primary underline text-sm">
            Revenir à l’accueil
          </Link>
        </div>
      )}
    </div>
  );
}
