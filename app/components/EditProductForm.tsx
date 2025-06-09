"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { produk } from "@/app/lib/definitions";

interface EditProductFormProps {
  produk: produk;
}

export default function EditProductForm({ produk }: EditProductFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id_produk: produk.id_produk,
    nama_produk: produk.nama_produk,
    harga: produk.harga,
    foto: produk.foto,
    deskripsi: produk.deskripsi,
    id_kategori: produk.id_kategori,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // TODO: Panggil API update produk (pakai fetch/axios)
      console.log("Data yang akan dikirim:", formData);
      // Contoh setelah update, redirect ke halaman shop
      router.push("/admin/produk");
    } catch (error) {
      console.error("Gagal update produk:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
      {/* ID Produk - readonly */}
      <input
        type="text"
        value={formData.id_produk}
        readOnly
        className="border p-2 rounded w-full bg-gray-100"
      />

      {/* Nama Produk */}
      <input
        type="text"
        value={formData.nama_produk}
        onChange={(e) => setFormData({ ...formData, nama_produk: e.target.value })}
        className="border p-2 rounded w-full"
        required
        placeholder="Nama Produk"
      />

      <input
        type="number"
        value={formData.harga}
        onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
        className="border p-2 rounded w-full"
        required
        placeholder="Harga Produk"
      />


      <input
        type="text"
        value={formData.foto}
        onChange={(e) => setFormData({ ...formData, foto: e.target.value })}
        className="border p-2 rounded w-full"
        placeholder="URL Foto Produk"
      />

      <textarea
        value={formData.deskripsi}
        onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
        className="border p-2 rounded w-full"
        placeholder="Deskripsi Produk"
      ></textarea>

      <input
        type="text"
        value={formData.id_kategori}
        onChange={(e) => setFormData({ ...formData, id_kategori: e.target.value })}
        className="border p-2 rounded w-full"
        required
        placeholder="ID Kategori"
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
