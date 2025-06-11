import Breadcrumbs from '@/app/components/Breadcrumbs';

import { fetchKategori } from '@/app/lib/data';
import FormTambahProduk from '@/app/components/FormTambahProduk';

export default async function Page() {
  const kategori = await fetchKategori();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Katalog Produk", href: "/admin" },
          { label: "Tambah Produk", href: "/admin/produk/tambah", active: true },
        ]}
      />
      <FormTambahProduk kategori={kategori} />
    </main>
  );
}
