import Form from '@/app/components/FormTambahProduk';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { fetchProduk } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchProduk();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Katalog Produk", href: "/admin" },
          { label: "Tambah Produk", href: "/admin/produk/tambah", active: true },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
