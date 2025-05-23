"use client";
import { ArrowRightIcon } from "lucide-react";
import YouTube from "react-youtube";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="bg-cream space-y-8 mx-auto w-full">
      <SearchBar />

      {/* Recommandé pour toi */}
      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recommandé pour toi</h2>
          <button className="text-primary text-sm font-medium flex items-center">
            Tout voir <ArrowRightIcon size={16} className="ml-1" />
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-1">
          {["WNAr_dHrG1M", "nCnPGMaYFio", "DhNIHpBb6Dw"].map((videoId) => (
            <div key={videoId} className="w-[260px] flex-shrink-0">
              <YouTube
                videoId={videoId}
                opts={{
                  width: "260",
                  height: "146",
                  playerVars: {
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Tes dernières réparations */}
      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Tes dernières réparations</h2>
          <button className="text-primary text-sm font-medium flex items-center">
            Tout voir <ArrowRightIcon size={16} className="ml-1" />
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-1">
          {[
            {
              title: "Fermeture éclair remplacée",
              image:
                "https://images.unsplash.com/photo-1596832772762-78e213deff5f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              tag: "Textile",
            },
            {
              title: "Semelle recollée",
              image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
              tag: "Chaussure",
            },
            {
              title: "Broderie créative",
              image:
                "https://images.unsplash.com/photo-1622378158084-f2221260e688?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/round-white-and-brown-floral-ceramic-plate-r4oGH_91jrU",
              tag: "Custom",
            },
          ].map((repair, i) => (
            <div key={i} className="w-[200px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow border border-gray-100">
              <img src={repair.image} alt={repair.title} className="w-full h-32 object-cover" />
              <div className="p-3">
                <h3 className="text-sm font-medium">{repair.title}</h3>
                <span className="text-xs text-white bg-quaternary px-2 py-0.5 rounded-full inline-block mt-2">{repair.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top tuto */}
      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Top tuto</h2>
          <button className="text-primary text-sm font-medium flex items-center">
            Tout voir <ArrowRightIcon size={16} className="ml-1" />
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-1">
          {["WNAr_dHrG1M", "nCnPGMaYFio", "DhNIHpBb6Dw"].map((videoId) => (
            <div key={videoId} className="w-[260px] flex-shrink-0">
              <YouTube
                videoId={videoId}
                opts={{
                  width: "260",
                  height: "146",
                  playerVars: {
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
