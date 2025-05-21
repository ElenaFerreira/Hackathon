"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShirtIcon, TagIcon, HammerIcon, ChevronDownIcon, CheckCircleIcon } from "lucide-react";

export default function Step2Page() {
  const router = useRouter();
  const [photo, setPhoto] = useState<string | null>(null);
  const [form, setForm] = useState({ type: "", matiere: "", reparation: "" });

  useEffect(() => {
    const savedPhotoUrl = sessionStorage.getItem("scan-photo-url");
    if (savedPhotoUrl) {
      setPhoto(savedPhotoUrl);
    }

    const savedForm = sessionStorage.getItem("add_form");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);
    sessionStorage.setItem("add_form", JSON.stringify(updatedForm));
  };

  const handleNext = () => {
    router.push("/add/step3");
  };

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
          <ShirtIcon className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold">Infos</span>
        </div>
        <div className="h-px flex-1 bg-gray-300 mx-1"></div>
        <div className="flex flex-col items-center space-y-1">
          <HammerIcon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Répare</span>
        </div>
      </div>

      <div className="space-y-4">
        {photo && <img src={photo} alt="Aperçu" className="w-full rounded-xl object-cover" style={{ aspectRatio: "4 / 3" }} />}
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
                className="w-full pl-14 pr-8 py-3 border border-gray-300 rounded-md text-sm bg-white appearance-none cursor-pointer"
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt.toLowerCase()}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button onClick={handleNext} className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm mx-auto block cursor-pointer">
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
