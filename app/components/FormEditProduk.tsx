'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/button'; // pastikan kamu pakai komponen ini juga
import { kategori_real } from '../lib/definitions';

interface Produk {
    id_produk: string;
    nama_produk: string;
    deskripsi: string;
    harga: string;
    id_kategori: string;
}

// interface kategori_real {
//     id_kategori: string;
//     nama_kategori: string;
// }

interface FormEditProdukProps {
    initialData: Produk;
    kategori: kategori_real[];
    updateAction: (formData: FormData) => Promise<void>;
}

export default function FormEditProduk({
    initialData,
    kategori,
    updateAction,
}: FormEditProdukProps) {
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
            <input type="hidden" name="id_produk" value={initialData.id_produk} />

            <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
                        placeholder="Nama produk"
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
                        placeholder="Deskripsi produk"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="harga" className="mb-2 block text-sm font-medium">
                        Harga (dalam Rupiah)
                    </label>
                    <input
                        id="harga"
                        name="harga"
                        type="number"
                        min="0"
                        defaultValue={initialData.harga}
                        required
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="10000"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="id_kategori" className="mb-2 block text-sm font-medium">
                        Kategori Produk
                    </label>
                    <select
                        name="id_kategori"
                        defaultValue={initialData.id_kategori}
                        required
                    >
                        <option value="">-- Pilih Kategori --</option>
                        {kategori.map((k) => (
                            <option key={k.id_kategori} value={k.id_kategori}>
                                {k.nama_kategori}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/admin/produk/overview"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Batal
                </Link>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Menyimpan...' : 'Update Produk'}
                </Button>
            </div>
        </form>
    );
}
