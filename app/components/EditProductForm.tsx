'use client';

import { useState } from 'react';

export default function EditProductForm({
  productId,
  onClose,
}: {
  productId: string;
  onClose: () => void;
}) {
    const [name, setName] = useState(`Nama Lama ${productId}`);
  const [description, setDescription] = useState(`Deskripsi Lama ${productId}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Produk ${productId} diupdate:\nNama: ${name}\nDeskripsi: ${description}`);
    onClose();
  };

  return (
    <div className="border p-4 rounded-md mb-6 bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Edit Produk</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block font-medium">Nama Produk</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded">
            Simpan Perubahan
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
