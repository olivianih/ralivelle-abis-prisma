// import EditTransactionForm from "@/app/components/EditTransactionForm";
// import { fetchTransaksi } from "@/app/lib/data";

// interface Props {
//   params: { id_transaksi: string };
// }

// export default async function EditTransaksiPage({ params }: Props) {
//   const transaksi = await fetchTransaksi();
//   const item = transaksi.find(t => t.id_transaksi === params.id_transaksi);

// if (!item) {
//   return <div>Transaksi tidak ditemukan</div>;
// }

// const safeItem = {
//   id_transaksi: item.id_transaksi,
//   id_produk: item.id_produk ?? "",
//   nama_pelanggan: item.nama_pelanggan ?? "",
//   tanggal_transaksi: item.tanggal_transaksi ?? "",
//   total_harga: item.total_harga ?? "",
// };

// return <EditTransactionForm transaksi={safeItem} />;

// }
