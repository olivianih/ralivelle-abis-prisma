'use client';

import { kategoriField } from '@/app/lib/definitions';
import { Button } from '@/app/components/button';
import { addProduct } from '@/app/lib/actions';
import Link from 'next/link';

export default function FormTambahProduk({
    kategori,
}: {
    kategori: kategoriField[];
}) {
    return (
        <form action={addProduct}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                <div className="mb-4">
                    <label htmlFor="id_produk" className="mb-2 block text-sm font-medium">
                        ID Produk
                    </label>
                    <input
                        id="id_produk"
                        name="id_produk"
                        type="text"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="Misal: P001"
                        required
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
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="Nama produk"
                        required
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
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="Deskripsi produk"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="harga" className="mb-2 block text-sm font-medium">
                        Harga (dalam Rupiah)
                    </label>
                    <input
                        id="harga"
                        name="harga"
                        type="text"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="10000"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="kategori" className="mb-2 block text-sm font-medium">
                        Kategori Produk
                    </label>
                    <input
                        id="kategori"
                        name="kategori"
                        type="text"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="Masukkan kategori produk"
                        required
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/admin/produk"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Batal
                </Link>
                <Button type="submit">Tambah Produk</Button>
            </div>
        </form>
    );
}
