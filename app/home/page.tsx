import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ProductCard } from '@/app/components/ProductCard';
import { fetchProduk } from '../lib/data';

export default async function HomePage() {
  const products = await fetchProduk();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-4xl font-extrabold text-center text-black-600 mb-8">
        Selamat Datang di Ralivelle!
      </h1>

      <div className="flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-base text-gray-800 md:text-lg md:leading-relaxed text-justify">
            Ralivelle adalah rumah buket cantik dan penuh makna. Kami menghadirkan berbagai pilihan buket mulai dari buket bunga segar, buket snack, hingga buket uang yang dirancang spesial untuk setiap momen berharga.
          </p>
          <Link
            href="/shop"
            className="flex items-center gap-5 self-start rounded-lg bg-[#D39C9C] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-400 md:text-base"
          >
            <span>Belanja Sekarang</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <img
            src="/diskon.png"
            alt="Promo Flower Bouquet"
          />
        </div>
      </div>

      <div className="mt-12 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Best Seller Ralivelle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[600px] overflow-auto">
          {products.produk.map((product) => (
            <Link
              key={product.id_produk}
              href={`/shop/${product.id_produk}`}
              className="cursor-pointer"
            >
              <ProductCard
                id_produk={product.id_produk}
                nama_produk={product.nama_produk ?? ""}
                deskripsi={product.deskripsi ?? ""}
                foto={product.foto ?? ""}
                harga={product.harga ?? ""}
                id_kategori={product.id_kategori ?? ""}
              />
            </Link>
          ))}
        </div>

      </div>

    </main>
  );
}