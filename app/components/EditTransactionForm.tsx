"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface EditTransactionFormProps {
  transaksi: {
    id_transaksi: string;
    id_produk: string;
    nama_pelanggan: string;
    tanggal_transaksi: string;
    total_harga: string;
  };
}

export default function EditTransactionForm({ transaksi }: EditTransactionFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id_transaksi: transaksi.id_transaksi,
    id_produk: transaksi.id_produk,
    nama_pelanggan: transaksi.nama_pelanggan,
    tanggal_transaksi: transaksi.tanggal_transaksi,
    total_harga: transaksi.total_harga,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/admin/transaksi");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
      <input
        type="text"
        value={formData.id_transaksi}
        readOnly
        className="border p-2 rounded w-full bg-gray-100"
      />
      <input
        type="text"
        value={formData.id_produk}
        onChange={(e) => setFormData({ ...formData, id_produk: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="text"
        value={formData.nama_pelanggan}
        onChange={(e) => setFormData({ ...formData, nama_pelanggan: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="date"
        value={formData.tanggal_transaksi}
        onChange={(e) => setFormData({ ...formData, tanggal_transaksi: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="text"
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
