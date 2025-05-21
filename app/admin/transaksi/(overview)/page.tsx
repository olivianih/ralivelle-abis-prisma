import { fetchTransaksi } from "@/app/lib/data";
import Link from "next/link";

export default async function TransaksiPage() {
  const transaksi = await fetchTransaksi();

  return (
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Daftar Transaksi</h1>

      <Link href="./transaksi/tambah">
        <button className="bg-[#ECD3DB] hover:bg-[#D39C9C] text-black px-4 py-2 rounded-lg text-sm">
          Tambah Transaksi
        </button>
      </Link>

      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID Transaksi</th>
            <th className="p-2">ID Produk</th>
            <th className="p-2">Pelanggan</th>
            <th className="p-2">Tanggal</th>
            <th className="p-2">Total</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transaksi.map((item) => (
            <tr key={item.id_transaksi} className="border-t">
              <td className="p-2 text-center">{item.id_transaksi}</td>
              <td className="p-2 text-center">{item.id_produk}</td>
              <td className="p-2 text-center">{item.nama_pelanggan}</td>
              <td className="p-2 text-center">{item.tanggal_transaksi}</td>
              <td className="p-2 text-center">{item.total_harga}</td>
              <td className="p-2 text-center space-x-2">
                <Link href={`./transaksi/edit/${item.id_transaksi}`}>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
