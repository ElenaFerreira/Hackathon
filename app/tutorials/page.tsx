"use client";
import Image from "next/image";
import SearchBar from "../../components/SearchBar";

export default function Tutorials() {
  return (
    <div className="bg-cream space-y-8 mx-auto w-full">
      <SearchBar />

      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Les bases de la réparation textile</h2>
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
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Réparer ses chaussures soi-même</h2>
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
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Custom & upcycling créatif</h2>
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
      </div>
    </div>
  );
}
