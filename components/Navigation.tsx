"use client";
import Link from "next/link";
import { HomeIcon, SearchIcon, PlusIcon, PlayIcon, UserIcon } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow px-4 py-3 flex justify-around items-center max-w-md mx-auto w-full z-50 h-16">
      <Link href="/" aria-label="Home">
        <HomeIcon className="size-6 text-gray-700" />
      </Link>

      <Link href="/search" aria-label="Search">
        <SearchIcon className="size-6 text-gray-700" />
      </Link>

      <Link href="/add" aria-label="Add" className="bg-primary text-white p-3 rounded-full shadow-md">
        <PlusIcon className="size-5" />
      </Link>

      <Link href="/play" aria-label="Play">
        <PlayIcon className="size-6 text-gray-700" />
      </Link>

      <Link href="/profile" aria-label="Profile">
        <UserIcon className="size-6 text-gray-700" />
      </Link>
    </nav>
  );
}
