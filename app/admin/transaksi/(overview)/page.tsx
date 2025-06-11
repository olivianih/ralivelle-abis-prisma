import Search from "@/app/components/Search";
import { fetchTransaksi } from "@/app/lib/data";
import Link from "next/link";
import DeleteButton from "@/app/components/Delete";
import { handleDeleteTransaksi } from "@/app/lib/actions";

export default async function TransaksiPage({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query ?? "";
  const transaksi = await fetchTransaksi(query);

  return (
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Daftar Transaksi</h1>

      <div className="mt-4 mb-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari transaksi..." />
        <Link href="./transaksi/tambah">
          <button className="bg-[#ECD3DB] hover:bg-[#D39C9C] text-black px-4 py-2 rounded-lg text-sm">
            Tambah Transaksi
          </button>
        </Link>
      </div>

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
              <td className="p-2 text-center">
                {new Date(item.tanggal_transaksi).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="p-2 text-center">{item.total_harga}</td>
              <td className="p-2 text-center">
                {/* <DeleteButton
                  idName="id_transaksi"
                  idValue={item.id_transaksi}
                  deleteAction={handleDeleteTransaksi}
                /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}