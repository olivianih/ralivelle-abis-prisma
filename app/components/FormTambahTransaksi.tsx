'use client';

import { produk_real } from '@/app/lib/definitions';
import { Button } from '@/app/components/button';
import { addTransaksi } from '@/app/lib/actions';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface FormTambahTransaksiProps {
    produkList: produk_real[];
    nextId: number;
}

export default function FormTambahTransaksi({
    produkList,
    nextId,
}: FormTambahTransaksiProps) {
    const [tanggalSekarang, setTanggalSekarang] = useState('');

    useEffect(() => {
        const now = new Date().toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        setTanggalSekarang(now);
    }, []);

    return (
        <form action={addTransaksi}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4 text-sm ">
                    <p className='mb-4 text-gray-500'><strong>ID Transaksi:</strong> {nextId}</p>
                    <p className='mb-4 text-gray-500'>{tanggalSekarang}</p>
                </div>

                <div className="mb-4">
                    <label htmlFor="id_produk" className="mb-2 block text-sm font-medium">
                        Produk
                    </label>
                    <select
                        id="id_produk"
                        name="id_produk"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm text-gray-700"
                        required
                    >
                        <option value="">-- Pilih Produk --</option>
                        {produkList.map((p) => (
                            <option key={p.id_produk} value={p.id_produk}>
                                {p.id_produk} - {p.nama_produk}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="nama_pelanggan" className="mb-2 block text-sm font-medium">
                        Nama Pelanggan
                    </label>
                    <input
                        id="nama_pelanggan"
                        name="nama_pelanggan"
                        type="text"
                        placeholder="Nama pelanggan"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
                        Total Harga (Rp)
                    </label>
                    <input
                        id="total_harga"
                        name="total_harga"
                        type="number"
                        min="0"
                        placeholder="10000"
                        className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
                        required
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/admin/transaksi/overview"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Batal
                </Link>
                <Button type="submit">Tambah Transaksi</Button>
            </div>
        </form>
    );
}
