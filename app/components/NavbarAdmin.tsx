'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#D39C9C] text-white shadow-md flex flex-col items-start p-6 z-50">
      <div className="flex items-center gap-3 mb-10">
        <img
          src="/logoRalivelle.png"
          alt="Ralivelle Florist Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <p className="text-xl font-bold tracking-wide">
          Ralivelle Florist
        </p>
      </div>

      <nav className="flex flex-col gap-4 w-full">
        <Link href="/admin/dashboard" className="text-white hover:underline">
          Dashboard
        </Link>
        <Link href="/admin/produk" className="text-white hover:underline">
          Produk
        </Link>
        <Link href="/admin/transaksi" className="text-white hover:underline">
          Transaksi
        </Link>
        <a
          onClick={(e) => {
            e.preventDefault();
            const confirmLogout = window.confirm('Anda akan log out dari website');
            if (confirmLogout) {
              window.location.href = '/login';
            }
          }}
          className="cursor-pointer text-white hover:underline"
        >
          Log Out
        </a>
      </nav>
    </aside>
  );
}
