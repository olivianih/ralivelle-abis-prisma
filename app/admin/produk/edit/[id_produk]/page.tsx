import { fetchProdukById, fetchKategori } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";
import FormEditProduk from "@/app/components/FormEditProduk";

type PageProps = {
  params: {
    id_produk: string;
  };
};

export default async function EditProdukPage(props: any) {
  const { id_produk } = props.params;

  const produk = await fetchProdukById(id_produk);
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
