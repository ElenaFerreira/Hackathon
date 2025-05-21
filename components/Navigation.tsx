"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, PlayIcon, UserIcon, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", icon: Home, label: "Accueil" },
  { href: "/tutorials", icon: PlayIcon, label: "Tutoriels" },
  { href: "/add/step1", icon: Camera, label: "Scanner" },
  { href: "/profile", icon: UserIcon, label: "Profil" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 rounded-t-2xl mx-auto">
      <div className="mx-auto w-full flex justify-around px-4 py-3 h-20 items-center">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = label === "Scanner" ? pathname.startsWith("/add/") : pathname === href;
          return (
            <Link key={href} href={href} className="flex flex-col items-center justify-between relative w-full">
              <Icon className={`w-6 h-6 mb-1 transition-colors duration-300 ${isActive ? "text-primary" : "text-black"}`} />
              <span className={`text-xs font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-black"}`}>{label}</span>

              {/* Animation du demi-cercle */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-5 w-8 h-4 bg-primary rounded-t-full"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
