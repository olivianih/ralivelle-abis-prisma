import Link from 'next/link';
import { fetchProduk } from '@/app/lib/data';
import { ProductCard } from '@/app/components/ProductCard';
import Search from '../components/Search';
import Breadcrumbs from '../components/Breadcrumbs';

export default async function ShopPage({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
  const query = searchParams?.query ?? '';
  const page = Number(searchParams?.page ?? 1);
  const limit = 6; // hanya 6 produk per halaman

  const { produk, total } = await fetchProduk(query, page, limit);
  const totalPages = 4; // ⬅️ batas maksimal pagination

  return (
    <section className="p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Ralivelle', href: '/' },
          { label: 'Shop', href: '/shop' },
        ]}
      />
      <Search placeholder="Cari produk..." />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {produk.map((product) => (
          <Link key={product.id_produk} href={`/shop/${product.id_produk}`} className="cursor-pointer">
            <ProductCard
              id_produk={product.id_produk}
              nama_produk={product.nama_produk ?? ''}
              deskripsi={product.deskripsi ?? ''}
              foto={product.foto ?? '/placeholder.jpg'}
              harga={product.harga ?? ''}
              id_kategori={product.id_kategori ?? ''}
            />
          </Link>
        ))}
      </div>

      {/* Pagination: hanya 4 halaman */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`/shop?page=${i + 1}${query ? `&query=${query}` : ''}`}
            className={`px-4 py-2 border rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </section>
  );
}