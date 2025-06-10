// import Form from '@/app/components/FormTambahProduk';
import Breadcrumbs from '@/app/components/Breadcrumbs';
// import { fetchProduk } from '@/app/lib/data';

// export default async function Page() {
//   const customers = await fetchProduk();

//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: "Katalog Produk", href: "/admin" },
//           { label: "Tambah Produk", href: "/admin/produk/tambah", active: true },
//         ]}
//       />
//       <Form customers={customers} />
//     </main>
//   );
// }

// app/admin/produk/add/page.tsx

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
      {/* <h1 className="text-xl font-bold mb-4">Tambah Produk</h1> */}
      <FormTambahProduk kategori={kategori} />
    </main>
  );
}
