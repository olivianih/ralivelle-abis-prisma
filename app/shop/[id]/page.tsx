'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { dummyProducts } from '@/app/lib/placeholder-data';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const selectedProduct = dummyProducts.find((product) => product.id === id);
      setProduct(selectedProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Detail Produk', href: '#', active: true }
        ]}
      />

      <div className="flex mt-6 gap-10">
        <div className="w-1/3 border border-gray-400 rounded-xl overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full  object-cover"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-blue-600 text-xl font-semibold">{product.price}</p>

          <button
            className="mt-6 w-fit px-4 py-2 bg-[#ECD3DB] text-black rounded-lg hover:bg-[#D39C9C] transition"
            onClick={() => alert('Produk ditambahkan ke keranjang!')}
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
