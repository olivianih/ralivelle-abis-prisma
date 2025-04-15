'use client';

import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <header className="w-full bg-[#D39C9C] text-white shadow-md fixed top-0 left-0 h-16 flex items-center px-4 z-50 justify-between">
      {/* Kiri: Logo & Nama */}
      <div className="flex items-center gap-3">
        <img
          src="/logoRalivelle.png"
          alt="Ralivelle Florist Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <p className="text-xl md:text-2xl font-bold tracking-wide">
          Ralivelle Florist
        </p>
      </div>

      {/* Tengah: NavLinks (horizontal) */}
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <NavLinks />
      </nav>

      {/* Kanan: Tombol Logout */}
      <form>
        <button className="flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-lg text-[10px] p-2 hover:text-red-100">
          <PowerIcon className="w-5 h-5" />
          <span className="text-[10px]">Log Out</span>
        </button>
      </form>
    </header>
  );
}
