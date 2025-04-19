import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Banner Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1 className="text-white text-2xl md:text-4xl font-bold">Ralivelle</h1>
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Selamat datang di Ralivelle!</strong> Temukan berbagai produk pilihan dengan harga terbaik. Belanja jadi lebih mudah dan cepat.
          </p>
          <Link
            href="/shop"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Belanja Sekarang</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="w-full h-60 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            Gambar/banner produk di sini
          </div>
        </div>
      </div>
    </main>
  );
}