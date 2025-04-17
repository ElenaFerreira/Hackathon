"use client";

import React from "react";
import { SettingsIcon, AwardIcon, BookmarkIcon, ClockIcon } from "lucide-react";
import { CTAButton } from "../../components/CTAButton";

export default function Profile() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-md mx-auto w-full">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <SettingsIcon size={20} />
        </button>
      </div>
      {/* User Info */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src="https://i.pravatar.cc/150?img=32" alt="User profile" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full border-2 border-white">
            <AwardIcon size={16} />
          </div>
        </div>
        <h2 className="text-xl font-bold mt-3">Jamie Rivera</h2>
        <p className="text-gray-500 text-sm">Repair Enthusiast • Joined May 2023</p>
        <div className="flex space-x-6 mt-4">
          <div className="text-center">
            <p className="font-bold">12</p>
            <p className="text-xs text-gray-500">Repairs</p>
          </div>
          <div className="text-center">
            <p className="font-bold">5</p>
            <p className="text-xs text-gray-500">Badges</p>
          </div>
          <div className="text-center">
            <p className="font-bold">87</p>
            <p className="text-xs text-gray-500">Points</p>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <CTAButton variant="primary" className="text-sm py-2">
          Edit Profile
        </CTAButton>
        <CTAButton variant="secondary" className="text-sm py-2">
          Share Profile
        </CTAButton>
      </div>
      {/* Sections */}
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <BookmarkIcon size={18} className="text-emerald-600 mr-2" />
            <h3 className="font-medium">Saved Tutorials</h3>
          </div>
          <p className="text-sm text-gray-500">You have 4 saved tutorials</p>
          <button className="text-emerald-600 text-sm font-medium mt-2">View all</button>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <ClockIcon size={18} className="text-emerald-600 mr-2" />
            <h3 className="font-medium">Repair History</h3>
          </div>
          <p className="text-sm text-gray-500">Track your repair journey</p>
          <button className="text-emerald-600 text-sm font-medium mt-2">View history</button>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <AwardIcon size={18} className="text-emerald-600 mr-2" />
            <h3 className="font-medium">Career Path</h3>
          </div>
          <p className="text-sm text-gray-500">Explore careers in textile repair</p>
          <button className="text-emerald-600 text-sm font-medium mt-2">Take assessment</button>
        </div>
      </div>
    </div>
  );
}
