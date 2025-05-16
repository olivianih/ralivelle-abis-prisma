"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTransactionForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        id_transaksi: "",
        id_produk: "",
        nama_pelanggan: "",
        tanggal_transaksi: "",
        total_harga: "",
    });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/admin/transaksi");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
            <input
                type="text"
                placeholder="ID Transaksi"
                value={formData.id_transaksi}
                onChange={(e) => setFormData({ ...formData, id_transaksi: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <input
                type="text"
                placeholder="ID Produk"
                value={formData.id_produk}
                onChange={(e) => setFormData({ ...formData, id_produk: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <input
                type="text"
                placeholder="Nama Pelanggan"
                value={formData.nama_pelanggan}
                onChange={(e) => setFormData({ ...formData, nama_pelanggan: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <input
                type="date"
                placeholder="Tanggal Transaksi"
                value={formData.tanggal_transaksi}
                onChange={(e) => setFormData({ ...formData, tanggal_transaksi: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <input
                type="text"
                placeholder="Total Harga"
                value={formData.total_harga}
                onChange={(e) => setFormData({ ...formData, total_harga: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Simpan
            </button>
        </form>
    );
}
