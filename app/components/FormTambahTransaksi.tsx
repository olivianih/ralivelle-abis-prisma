'use client';

import { Button } from '@/app/components/button';
import { addTransaksi } from '@/app/lib/actions';
import Link from 'next/link';

export default function FormTambahTransaksi() {
    return (
        <form action={addTransaksi}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                <div className="mb-4">
                    <label htmlFor="id_transaksi" className="mb-2 block text-sm font-medium">
                        ID Transaksi
                    </label>
                    <input
                        id="id_transaksi"
                        name="id_transaksi"
                        type="text"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="Misal: T001"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="id_produk" className="mb-2 block text-sm font-medium">
                        ID Produk
                    </label>
                    <input
                        id="id_produk"
                        name="id_produk"
                        type="text"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="ID produk terkait"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="nama_pelanggan" className="mb-2 block text-sm font-medium">
                        Nama Pelanggan
                    </label>
                    <input
                        id="nama_pelanggan"
                        name="nama_pelanggan"
                        type="text"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="Nama pelanggan"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="tanggal_transaksi" className="mb-2 block text-sm font-medium">
                        Tanggal Transaksi
                    </label>
                    <input
                        id="tanggal_transaksi"
                        name="tanggal_transaksi"
                        type="date"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
                        Total Harga (Rupiah)
                    </label>
                    <input
                        id="total_harga"
                        name="total_harga"
                        type="text"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                        placeholder="Contoh: 50000"
                        required
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/admin/transaksi"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Batal
                </Link>
                <Button type="submit">Tambah Transaksi</Button>
            </div>
        </form>
    );
}
