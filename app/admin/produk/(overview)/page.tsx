import { fetchProduk, deleteProduct } from "@/app/lib/data";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Search from "@/app/components/Search";
import { Suspense } from "react";
import Link from "next/link";
import { TabelProdukSkeleton } from "@/app/ui/skeletonProduk";
import DeleteButton from "@/app/components/Delete";

// type Props = {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// };

export default async function ShopPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const query = typeof searchParams?.query === "string" ? searchParams.query : "";
  const page = typeof searchParams?.page === "string" ? parseInt(searchParams.page) : 1;
  const limit = 6;

  const { produk: products, total } = await fetchProduk(query, page, limit);
  const totalPages = Math.ceil(total / limit);

  async function handleDelete(formData: FormData) {
    "use server";
    const id = formData.get("id_produk");
    if (typeof id === "string") {
      await deleteProduct(Number(id));
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
                    <DeleteButton
                      idName="id_produk"
                      idValue={product.id_produk}
                      deleteAction={handleDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i + 1}
              href={`?page=${i + 1}${query ? `&query=${query}` : ""}`}
              className={`px-4 py-2 border rounded ${page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
                }`}
            >
              {i + 1}
            </Link>
          ))}
        </div>
      </Suspense>
    </section>
  );
}
