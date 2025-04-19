import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-[#D39C9C] text-white shadow-md fixed top-0 left-0 h-20 flex items-center px-4 z-50 justify-between">
      <div className="flex items-center gap-3">
        <img
          src="logoRalivelle.png"
          alt="Ralivelle Florist Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <p className="text-2xl md:text-2xl font-bold tracking-wide">
          Ralivelle Florist
        </p>
      </div>

      <nav className="flex gap-4 ml-auto">
        <Link href="/admin/dashboard" className="text-white hover:underline">
          Dashboard
        </Link>
        <Link href="/admin/produk" className="text-white hover:underline">
          Produk
        </Link>
        <Link href="/admin/transaksi" className="text-white hover:underline">
          Transaksi
        </Link>
        <Link href="" className="text-white hover:underline">
          Log Out
        </Link>
      </nav>
    </header>
  );
}
