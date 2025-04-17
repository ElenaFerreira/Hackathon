import React from "react";
import { ArrowRightIcon, TrendingUpIcon, LeafIcon, BriefcaseIcon } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { FeaturedCard } from "../components/FeaturedCard";

export default function Home() {
  return (
    <div className="px-4 py-6 space-y-8 max-w-md mx-auto w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Repair. Reuse. Revive.</h1>
        <p className="mb-6 opacity-90">Join the movement to give your clothes a second life and discover sustainable career paths.</p>
        <div className="flex space-x-3">
          <CTAButton variant="secondary" className="flex-1">
            Learn How
          </CTAButton>
          <CTAButton className="flex-1">Get Started</CTAButton>
        </div>
      </section>
      {/* Featured Tutorials */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Popular Repairs</h2>
          <button className="text-emerald-600 flex items-center text-sm font-medium">
            See all <ArrowRightIcon size={16} className="ml-1" />
          </button>
        </div>
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
        </div>
      </section>
      {/* Why Repair Section */}
      <section className="bg-gray-100 rounded-xl p-5">
        <h2 className="text-xl font-bold mb-4">Why Repair?</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-emerald-100 p-2 rounded-full mr-3">
              <LeafIcon size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-medium">Sustainability</h3>
              <p className="text-sm text-gray-600">Extend the life of your clothes and reduce waste.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-emerald-100 p-2 rounded-full mr-3">
              <TrendingUpIcon size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-medium">Learn New Skills</h3>
              <p className="text-sm text-gray-600">Master techniques that save money and express creativity.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-emerald-100 p-2 rounded-full mr-3">
              <BriefcaseIcon size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-medium">Career Opportunities</h3>
              <p className="text-sm text-gray-600">Discover fulfilling career paths in textile and shoe repair.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Career Spotlight */}
      <section>
        <h2 className="text-xl font-bold mb-4">Career Spotlight</h2>
        <div className="bg-white rounded-xl overflow-hidden shadow border border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Textile designer at work"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">Textile Repair Specialist</h3>
            <p className="text-gray-600 text-sm mb-3">Combine technical skills and creativity to restore and reimagine garments.</p>
            <CTAButton variant="secondary" className="w-full text-sm py-2">
              Explore This Career
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
