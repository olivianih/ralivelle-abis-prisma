import { fetchProdukById, fetchKategori } from '@/app/lib/data';
import { updateProduct } from '@/app/lib/actions';
import FormEditProduk from '@/app/components/FormEditProduk';

interface PageProps {
  params: { id: string };
}

export default async function EditProdukPage({ params }: { params: { id_produk: string } }) {
  const produk = await fetchProdukById(params.id_produk);
  const kategori = await fetchKategori();

  if (!produk) {
    return <p>Produk tidak ditemukan</p>;
  }

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Edit Produk</h1>
      <FormEditProduk
        initialData={produk}
        kategori={kategori}
        updateAction={updateProduct}
      />
    </main>
  );
}
