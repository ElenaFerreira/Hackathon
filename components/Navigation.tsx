"use client";
import Link from "next/link";
import { HomeIcon, BookOpenIcon, UsersIcon, UserIcon } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow p-2 flex justify-around max-w-md mx-auto w-full">
      <Link href="/" className="flex flex-col items-center">
        <HomeIcon />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/tutorials" className="flex flex-col items-center">
        <BookOpenIcon />
        <span className="text-xs">Tutorials</span>
      </Link>
      <Link href="/community" className="flex flex-col items-center">
        <UsersIcon />
        <span className="text-xs">Community</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center">
        <UserIcon />
        <span className="text-xs">Profile</span>
      </Link>
    </nav>
  );
}
