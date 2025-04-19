"use client";
import Search from "@/app/components/Search";
import { dummyTransaksi } from "@/app/lib/placeholder-data";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function TransaksiPage() {
  const [transaksi, setTransaksi] = useState(dummyTransaksi);
  const [editId, setEditId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ produk: "", pembeli: "", tanggal: "" });
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleEditClick = (item: any) => {
    setEditId(item.id);
    setFormData({ produk: item.produk, pembeli: item.pembeli, tanggal: item.tanggal });
  };

  const handleHapus = (id: number) => {
    const konfirmasi = confirm("Yakin ingin menghapus transaksi?");
    if (konfirmasi) {
      setTransaksi(transaksi.filter((item) => item.id !== id));
    }
  };

  const handleSimpanEdit = (id: number) => {
    setTransaksi(
      transaksi.map((item) =>
        item.id === id ? { ...item, ...formData } : item
      )
    );
    setEditId(null);
    setFormData({ produk: "", pembeli: "", tanggal: "" });
  };

  const handleTambahBaru = () => {
    const newId = transaksi.length > 0 ? transaksi[transaksi.length - 1].id + 1 : 1;
    const newItem = { id: newId, ...formData };
    setTransaksi([...transaksi, newItem]);
    setFormData({ produk: "", pembeli: "", tanggal: "" });
    setShowForm(false);
  };

  const filteredTransaksi = transaksi.filter((item) =>
    item.produk.toLowerCase().includes(searchQuery.toLowerCase())
  );  

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Transaksi</h1>
      <div className="flex gap-4 mt-6 mb-6 border border-gray-400 rounded">
                        <Search placeholder="Cari produk" onSearch={setSearchQuery} />
                    </div>
      {/* Tombol Tambah Produk & Tambah Transaksi */}
      <div className="flex gap-4 mb-4">
        
        <button
          className="px-4 py-2 bg-[#D39C9C] text-white rounded hover:bg-pink-700"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Batal" : "Tambah Produk"}
        </button>

        

      </div>

      {/* Form Tambah Produk */}
      {showForm && (
        <div className="mb-4 space-y-2 bg-gray-50 p-4 rounded shadow border">
          <input
            type="text"
            placeholder="Nama Produk"
            value={formData.produk}
            onChange={(e) => setFormData({ ...formData, produk: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Nama Pembeli"
            value={formData.pembeli}
            onChange={(e) => setFormData({ ...formData, pembeli: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            value={formData.tanggal}
            onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleTambahBaru}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Simpan
          </button>
        </div>
      )}

      {/* Tabel Transaksi */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">No</th>
              <th className="p-2">Produk</th>
              <th className="p-2">Pembeli</th>
              <th className="p-2">Tanggal</th>
              <th className="p-2">Edit/Hapus</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransaksi.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{index + 1}</td>

                {editId === item.id ? (
                  <>
                    <td className="p-2">
                      <input
                        type="text"
                        value={formData.produk}
                        onChange={(e) =>
                          setFormData({ ...formData, produk: e.target.value })
                        }
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={formData.pembeli}
                        onChange={(e) =>
                          setFormData({ ...formData, pembeli: e.target.value })
                        }
                        className="border p-1 rounded w-full"
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-2">{item.produk}</td>
                    <td className="p-2">{item.pembeli}</td>
                  </>
                )}

                <td className="p-2">{item.tanggal}</td>

                <td className="p-2 space-x-2">
                  {editId === item.id ? (
                    <button
                      className="text-green-600 hover:underline"
                      onClick={() => handleSimpanEdit(item.id)}
                    >
                      💾 Simpan
                    </button>
                  ) : (
                    <button
                      className="text-yellow-600 hover:underline"
                      onClick={() => handleEditClick(item)}
                    >
                      ✏️
                    </button>
                  )}
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleHapus(item.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
