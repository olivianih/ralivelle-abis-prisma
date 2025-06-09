import { fetchProduk, deleteProduct } from "@/app/lib/data";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Search from "@/app/components/Search";
import { Suspense } from "react";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { TabelProdukSkeleton } from "@/app/ui/skeletonProduk";
// import { useRouter } from 'next/navigation';
import DeleteButton from "@/app/components/Delete";


export default async function ShopPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const products = await fetchProduk(searchParams?.query);


  async function handleDelete(data: FormData) {
      "use server";
      const id_produk = data.get("id_produk");
      if (typeof id_produk === "string") {
        await deleteProduct(Number(id_produk));
      }
    }
  return (
    <section className="w-full p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Ralivelle", href: "/home" },
          { label: "Katalog Produk", href: "/shop", active: true },
        ]}
      />

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari produk..." />
        <Link href="./produk/tambah">
          <button className="bg-[#ECD3DB] hover:bg-[#D39C9C] text-black px-4 py-2 rounded-lg text-sm">
            Tambah Produk
          </button>
        </Link>
      </div>

      <Suspense fallback={<TabelProdukSkeleton />}>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-[#ECD3DB]">
              <tr>
                <th className="px-4 py-2 border-b">ID Produk</th>
                <th className="px-4 py-2 border-b">Nama Produk</th>
                <th className="px-4 py-2 border-b">Deskripsi</th>
                <th className="px-4 py-2 border-b">Harga</th>
                <th className="px-4 py-2 border-b">Kategori</th>
                <th className="px-4 py-2 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id_produk} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-center">{product.id_produk}</td>
                  <td className="px-4 py-2 border-b">{product.nama_produk}</td>
                  <td className="px-4 py-2 border-b">{product.deskripsi}</td>
                  <td className="px-4 py-2 border-b text-right">Rp {product.harga}</td>
                  <td className="px-4 py-2 border-b text-center">{product.id_kategori}</td>
                  <td className="px-4 py-2 border-b text-center space-x-2">
                    <Link
                      href={`./produk/edit/${product.id_produk}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <DeleteButton id_produk={product.id_produk} deleteAction={handleDelete} className="inline">
                      <input type="hidden" name="id_produk" value={product.id_produk} />
                      <button
                        type="submit"
                        className="text-red-600 hover:underline cursor-pointer bg-transparent border-none p-0"
                      >
                        Hapus
                      </button>
                    </DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>
    </section>
  );
}
