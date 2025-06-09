'use client';

import { useState } from 'react';

interface Produk {
    id_produk: number;
    nama_produk: string;
    deskripsi: string;
    harga: string;
    id_kategori: string;
}

interface FormEditProdukProps {
    initialData: Produk;
    updateAction: (formData: FormData) => Promise<void>; // server action untuk update
}

export default function FormEditProduk({ initialData, updateAction }: FormEditProdukProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await updateAction(formData);

        setIsSubmitting(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <label htmlFor="id_produk" className="mb-2 block text-sm font-medium">
                    ID Produk
                </label>
                <input
                    id="id_produk"
                    name="id_produk"
                    type="text"
                    defaultValue={String(initialData.id_produk)}
                    readOnly
                    className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500 bg-gray-100 cursor-not-allowed"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="nama_produk" className="mb-2 block text-sm font-medium">
                    Nama Produk
                </label>
                <input
                    id="nama_produk"
                    name="nama_produk"
                    type="text"
                    defaultValue={initialData.nama_produk}
                    required
                    className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="deskripsi" className="mb-2 block text-sm font-medium">
                    Deskripsi
                </label>
                <input
                    id="deskripsi"
                    name="deskripsi"
                    type="text"
                    defaultValue={initialData.deskripsi}
                    required
                    className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="harga" className="mb-2 block text-sm font-medium">
                    Harga
                </label>
                <input
                    id="harga"
                    name="harga"
                    type="text"
                    defaultValue={initialData.harga}
                    required
                    className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="id_kategori" className="mb-2 block text-sm font-medium">
                    Kategori
                </label>
                <input
                    id="id_kategori"
                    name="id_kategori"
                    type="text"
                    defaultValue={initialData.id_kategori}
                    required
                    className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
                {isSubmitting ? 'Menyimpan...' : 'Update Produk'}
            </button>
        </form>
    );
}
