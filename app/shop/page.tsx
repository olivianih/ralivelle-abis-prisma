'use client';

import ProductCard from '@/app/components/ProductCard';
import Search from '@/app/components/Search';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { dummyProducts } from '@/app/lib/placeholder-data';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ShopPage() {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [products] = useState(dummyProducts);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const router = useRouter();

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    return (
        <section className="p-6">
            <div><Breadcrumbs
                breadcrumbs={[
                    { label: 'Ralivelle', href: '/home' },
                    { label: 'Shop', href: '/shop', active: true },
                ]}
            />
            </div>

            <div className="flex gap-4 mt-6 mb-6 border border-gray-400 rounded">
                <Search placeholder="Cari produk" onSearch={setSearchQuery} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6 overflow-x-auto">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => router.push(`/shop/${product.id}`)}
                        className="cursor-pointer border rounded-xl hover:shadow-lg transition-all"
                    >
                        <ProductCard
                            name={product.name}
                            description={product.description}
                            imageUrl={product.imageUrl}
                            price={product.price}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
