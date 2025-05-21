"use client";
import { SearchIcon, Settings2 } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        {/* Barre de recherche */}
        <div className="flex items-center rounded-full px-4 py-3 bg-white flex-1">
          <input type="text" placeholder="Rechercher" className="flex-1 bg-transparent text-base outline-none placeholder:text-black pl-1" />
          <SearchIcon className="text-black w-5 h-5" />
        </div>

        {/* Bouton filtre */}
        <button
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Settings2 className="text-black w-5 h-5" />
        </button>
      </div>

      {/* Mini menu de filtres */}
      {showFilters && (
        <div className="flex space-x-3 overflow-x-auto no-scrollbar text-sm font-medium text-gray-600 pb-1">
          {["Tout voir", "Textile", "Chaussure", "Accessoires", "Débutant", "Avancé"].map((cat) => (
            <div key={cat} className="px-4 py-1 bg-secondary text-gray-700 rounded-full whitespace-nowrap cursor-pointer hover:bg-quaternary">
              {cat}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
