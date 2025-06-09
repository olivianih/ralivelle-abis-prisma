"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        id_produk: "",
        nama_produk: "",
        deskripsi: "",
        harga: "",
        kategori: "",
    });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/admin/produk");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
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
                placeholder="Nama Produk"
                value={formData.nama_produk}
                onChange={(e) => setFormData({ ...formData, nama_produk: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <input
                type="text"
                placeholder="Deskripsi"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <input
                type="text"
                placeholder="Harga"
                value={formData.harga}
                onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                className="border p-2 rounded w-full"
                required
            />
            <input
                type="text"
                placeholder="Kategori"
                value={formData.kategori}
                onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
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
