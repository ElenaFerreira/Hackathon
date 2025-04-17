"use client";

import React, { useRef, useState } from "react";

export default function AddPage() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ type: "", matiere: "", reparation: "" });

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

  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-6">
      {/* Étapes */}
      <div className="flex justify-between text-sm font-medium text-gray-400">
        <span className={step === 1 ? "text-black font-semibold underline" : ""}>Étape 1</span>
        <span className={step === 2 ? "text-black font-semibold underline" : ""}>Étape 2</span>
        <span className={step === 3 ? "text-black font-semibold underline" : ""}>Étape 3</span>
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
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              <option value="">Type</option>
              <option value="tshirt">T-shirt</option>
              <option value="pantalon">Pantalon</option>
              <option value="chaussure">Chaussure</option>
              <option value="veste">Veste</option>
              <option value="sac">Sac</option>
              <option value="ceinture">Ceinture</option>
              <option value="chapeau">Chapeau</option>
              <option value="autre">Autre</option>
            </select>
            <select
              name="matiere"
              value={form.matiere}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              <option value="">Matière</option>
              <option value="coton">Coton</option>
              <option value="jean">Jean</option>
              <option value="cuir">Cuir</option>
              <option value="laine">Laine</option>
              <option value="polyester">Polyester</option>
              <option value="nylon">Nylon</option>
              <option value="synthétique">Synthétique</option>
              <option value="toile">Toile</option>
              <option value="autre">Autre</option>
            </select>
            <input
              type="text"
              name="reparation"
              placeholder="Réparation"
              value={form.reparation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button onClick={() => setStep(3)} className="w-full bg-primary text-white py-2 rounded-md font-medium">
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
