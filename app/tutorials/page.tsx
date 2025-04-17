"use client";

import React from "react";
import { SearchIcon, FilterIcon } from "lucide-react";
import { FeaturedCard } from "../../components/FeaturedCard";

export default function Tutorials() {
  const categories = ["All", "Clothing", "Shoes", "Home Textiles", "Advanced"];
  return (
    <div className="px-4 py-6 space-y-6 max-w-md mx-auto w-full">
      <h1 className="text-2xl font-bold">Repair Tutorials</h1>
      {/* Search bar */}
      <div className="relative">
        <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search tutorials..."
          className="w-full bg-white border border-gray-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <FilterIcon size={18} className="text-gray-500" />
        </button>
      </div>
      {/* Categories */}
      <div className="flex overflow-x-auto pb-2 space-x-2 -mx-4 px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              index === 0 ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Tutorial List */}
      <div className="grid grid-cols-1 gap-4">
        <FeaturedCard
          title="Fix Ripped Jeans Like a Pro"
          description="Learn the visible mending technique to turn tears into style statements."
          image="https://images.unsplash.com/photo-1625479144604-ae69462778b7?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tag="Beginner"
        />
        <FeaturedCard
          title="Sneaker Restoration Guide"
          description="Bring your favorite kicks back to life with these simple techniques."
          image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          tag="Intermediate"
        />
        <FeaturedCard
          title="Patch Work Basics"
          description="Learn how to create beautiful patches for your favorite clothes."
          image="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          tag="Beginner"
        />
        <FeaturedCard
          title="Button Replacement 101"
          description="Never lose a button again with these simple sewing techniques."
          image="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          tag="Beginner"
        />
      </div>
    </div>
  );
}
