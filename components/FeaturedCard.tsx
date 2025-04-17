import React from "react";
interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
  tag?: string;
}
export function FeaturedCard({ title, description, image, tag }: FeaturedCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {tag && <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">{tag}</span>}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
