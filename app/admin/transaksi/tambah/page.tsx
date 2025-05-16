import AddTransactionForm from "@/app/components/AddTransactionForm";

export default function TambahTransaksiPage() {
  return (
    <main className="p-6 min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Tambah Transaksi</h1>
      <AddTransactionForm />
    </main>
  );
}
