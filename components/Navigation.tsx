"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, PlayIcon, UserIcon } from "lucide-react";

const navItems = [
  { href: "/tutorials", icon: PlayIcon, label: "Tutoriels" },
  { href: "/add", icon: Camera, label: "Ajouter" },
  { href: "/profile", icon: UserIcon, label: "Profil" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 rounded-t-2xl max-w-md mx-auto">
      <div className="max-w-md mx-auto w-full flex justify-around px-4 py-3 h-20 items-center">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} className="flex flex-col items-center justify-between relative w-full">
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-primary" : "text-black"}`} />
              <span className={`text-xs font-medium ${isActive ? "text-primary" : "text-black"}`}>{label}</span>
              {isActive && <div className="absolute -bottom-5 w-8 h-4 bg-primary rounded-t-full" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
