import Form from '@/app/components/FormEditProduk';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { fetchProdukById } from '@/app/lib/data';
import { updateProduct } from '@/app/lib/actions';

export default async function Page({ params }: { params: { id_produk: string } }) {
  const produk = await fetchProdukById(params.id_produk);

  if (!produk) {
    return <div>Produk tidak ditemukan.</div>;
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Katalog Produk", href: "/admin" },
          { label: "Edit Produk", href: `/admin/produk/edit/${params.id_produk}`, active: true },
        ]}
      />
      <Form initialData={produk} updateAction={updateProduct} />
    </main>
  );
}
