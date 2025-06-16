import Form from '@/app/components/FormTambahTransaksi';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { fetchProduk } from '@/app/lib/data';

export default async function Page() {
  const { produk: produkList } = await fetchProduk();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Data Transaksi', href: '/admin/transaksi/overview' },
          { label: 'Tambah Transaksi', href: '/admin/transaksi/tambah', active: true },
        ]}
      />
      <Form produkList={produkList} />
    </main>
  );
}
