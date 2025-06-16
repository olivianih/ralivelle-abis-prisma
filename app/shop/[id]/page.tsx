import { fetchProdukById } from '@/app/lib/data';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Image from 'next/image';

type PageProps = {
  searchParams: Promise<{ query?: string; page?: string }>;
};

export default async function ShopPage({ searchParams }: { searchParams?: { id_produk?: string } }) {
  const { id_produk = '' } = await Promise.resolve(searchParams ?? {});

  const product = await fetchProdukById(id_produk);
  if (!product) {
    return <div className="p-6 text-center text-gray-600">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Ralivelle', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Detail Produk', href: '#', active: true },
        ]}
      />

      <div className="flex mt-6 gap-10">
        <div className="w-1/3 border border-gray-400 rounded-xl overflow-hidden">
          <Image
            src={product.foto || '/placeholder.jpg'}
            alt={product.nama_produk}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.nama_produk}</h1>
          <p className="text-gray-700 mb-6">{product.deskripsi}</p>
          <p className="text-blue-600 text-xl font-semibold">Rp {product.harga}</p>
        </div>
      </div>
    </div>
  );
}