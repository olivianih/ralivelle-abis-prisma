'use client';

import { useState } from 'react';

export default function AddProductForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Produk baru ditambahkan:\nNama: ${name}\nDeskripsi: ${description}`);
    setName('');
    setDescription('');
    onClose();
  };

  return (
    <div className="border p-4 rounded-md mb-6 bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Tambah Produk</h2>
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
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Simpan
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
