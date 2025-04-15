'use client';

import { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';
import AddProductForm from '@/app/components/AddProductForm';
import EditProductForm from '@/app/components/EditProductForm';
import Search from '@/app/components/Search';

export default function ShopPage() {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const products = [
        { id: '1', name: 'Produk A', description: 'Deskripsi A' },
        { id: '2', name: 'Produk B', description: 'Deskripsi B' },
    ];

    const handleSelect = (id: string) => {
        setSelectedProduct(id === selectedProduct ? null : id);
    };

    return (
        <section className="p-6">
            <div className="flex gap-4 mb-6">
                {/* <button
                    onClick={() => {
                        setShowAddForm(true);
                        setShowEditForm(false);
                    }}
                    className="px-4 py-2 bg-[#ECD3DB] text-black rounded hover:bg-[#D39C9C] transition-colors"
                >
                    Tambah
                </button>
                <button
                    onClick={() => {
                        if (selectedProduct) {
                            setShowEditForm(true);
                            setShowAddForm(false);
                        } else {
                            alert('Pilih produk dulu untuk diedit.');
                        }
                    }}
                    className="px-4 py-2 bg-[#ECD3DB] text-black rounded hover:bg-yellow-500 transition-colors"
                >
                    Ubah
                </button>
                <button
                    onClick={() => {
                        if (selectedProduct) {
                            const confirmDelete = confirm('Yakin ingin menghapus produk ini?');
                            if (confirmDelete) {
                                alert(`Produk ${selectedProduct} dihapus!`);
                                setSelectedProduct(null);
                            }
                        } else {
                            alert('Pilih produk dulu untuk dihapus.');
                        }
                    }}
                    className="px-4 py-2 bg-[#ECD3DB] text-black rounded hover:bg-red-500 transition-colors"
                >
                    Hapus
                </button> */}
                <Search placeholder='Cari produk'/>
            </div>

            {/* {showAddForm && <AddProductForm onClose={() => setShowAddForm(false)} />}
            {showEditForm && selectedProduct && (
                <EditProductForm
                    productId={selectedProduct}
                    onClose={() => setShowEditForm(false)}
                />
            )} */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleSelect(product.id)}
                        className={`cursor-pointer border p-4 rounded-md ${selectedProduct === product.id ? 'border-blue-500 ring-2 ring-blue-300' : ''
                            }`}
                    >
                        <ProductCard name={product.name} description={product.description} imageUrl={''} price={''} />
                    </div>
                ))}
            </div>
        </section>
    );
}
