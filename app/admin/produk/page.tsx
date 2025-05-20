import { fetchProduk } from "@/app/lib/data";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Link from "next/link";

export default async function ShopPage() {
    const products = await fetchProduk();

  // Server action untuk handle delete
  // async function handleDelete(data: FormData) {
  //   "use server";
  //   const id_produk = data.get("id_produk");
  //   if (typeof id_produk === "string") {
  //     await deleteProduct(Number(id_produk));
  //   }
  // }

    return (
        <section className="p-6">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: "Ralivelle", href: "/home" },
          { label: "Katalog Produk", href: "/shop", active: true },
                    ]}
                />
      <h1 className="text-2xl font-bold mt-6">Katalog Produk</h1>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-[#ECD3DB]">
            <tr>
              <th className="px-4 py-2 border-b">ID Produk</th>
              <th className="px-4 py-2 border-b">Nama Produk</th>
              <th className="px-4 py-2 border-b">Deskripsi</th>
              <th className="px-4 py-2 border-b">Harga</th>
              <th className="px-4 py-2 border-b">ID Kategori</th>
              <th className="px-4 py-2 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
                {products.map((product) => (
              <tr key={product.id_produk} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">{product.id_produk}</td>
                <td className="px-4 py-2 border-b">{product.nama_produk}</td>
                <td className="px-4 py-2 border-b">{product.deskripsi}</td>
                <td className="px-4 py-2 border-b text-right">
                  Rp {product.harga}
                </td>
                <td className="px-4 py-2 border-b text-center">{product.id_kategori}</td>
                <td className="px-4 py-2 border-b text-center space-x-2">
                  <Link href={`/shop/edit/${product.id_produk}`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <form action={""} className="inline">
                    <input type="hidden" name="id_produk" value={product.id_produk} />
                    <button
                      type="submit"
                      className="text-red-600 hover:underline cursor-pointer bg-transparent border-none p-0"
                    >
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
                ))}
          </tbody>
        </table>
            </div>
        </section>
    );
}


// 'use client'

// import Link from 'next/link';
// import { dummyProducts } from '@/app/lib/placeholder-data';
// import {ProductCard} from '@/app/components/ProductCard';
// import Search from '@/app/components/Search';
// import { useState } from 'react';

// export default function AdminProductPage() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [showForm, setShowForm] = useState(false);
//     const [products, setProducts] = useState(dummyProducts);
//     const [editingIndex, setEditingIndex] = useState<number | null>(null);

//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     const [newProduct, setNewProduct] = useState({
//         id: '',
//         name: '',
//         description: '',
//         imageUrl: '',
//         price: '',
//     });

//     const handleAddProduct = (e: React.FormEvent) => {
//         e.preventDefault();
//         setProducts([...products, newProduct]);
//         setNewProduct({ id: '', name: '', description: '', imageUrl: '', price: '' });
//         setShowForm(false);
//     };

//     const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setNewProduct({ ...newProduct, imageUrl });
//         }
//     };

//     const handleEditChange = (index: number, field: string, value: string) => {
//         const updatedProducts = [...products];
//         updatedProducts[index] = {
//             ...updatedProducts[index],
//             [field]: value,
//         };
//         setProducts(updatedProducts);
//     };

//     const handleSaveEdit = () => {
//         setEditingIndex(null);
//     };

//     const handleDelete = (index: number) => {
//         const updatedProducts = [...products];
//         updatedProducts.splice(index, 1);
//         setProducts(updatedProducts);
//         alert('Produk telah dihapus');
//     };

//     return (
//         <main className="min-h-screen p-6 bg-white">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl font-bold">Daftar Produk</h1>
//                 <button
//                     onClick={() => setShowForm(!showForm)}
//                     className="bg-[#ECD3DB] hover:bg-[#D39C9C] text-black px-4 py-2 rounded-lg text-sm"
//                 >
//                     {showForm ? 'Batal' : 'Tambah Produk'}
//                 </button>
//             </div>

//             {showForm && (
//                 <form
//                     onSubmit={handleAddProduct}
//                     className="grid grid-cols-1 gap-4 mb-6 max-w-xl bg-gray-50 p-4 rounded"
//                 >
//                     <input
//                         className="border border-gray-300 p-2 rounded"
//                         placeholder="Nama Produk"
//                         value={newProduct.name}
//                         onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//                         required
//                     />
//                     <input
//                         className="border border-gray-300 p-2 rounded"
//                         placeholder="Deskripsi"
//                         value={newProduct.description}
//                         onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//                         required
//                     />
//                     <input
//                         type="file"
//                         accept="image/*"
//                         className="border border-gray-300 p-2 rounded"
//                         onChange={handleImageUpload}
//                         required
//                     />
//                     <input
//                         className="border border-gray-300 p-2 rounded"
//                         placeholder="Harga"
//                         value={newProduct.price}
//                         onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//                         required
//                     />
//                     <button
//                         type="submit"
//                         className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//                     >
//                         Simpan Produk
//                     </button>
//                 </form>
//             )}

//             <div className="mb-6 max-w">
//                 <Search
//                     placeholder="Cari produk..."
//                     onSearch={setSearchQuery}
//                 />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
//                 {filteredProducts.map((product, index) => (
//                     <div key={index} className="relative">
//                         {editingIndex === index ? (
//                             <div className="space-y-2 bg-gray-50 border p-4 rounded">
//                                 <input
//                                     className="border w-full p-1 rounded"
//                                     value={product.name}
//                                     onChange={(e) => handleEditChange(index, 'name', e.target.value)}
//                                 />
//                                 <input
//                                     className="border w-full p-1 rounded"
//                                     value={product.description}
//                                     onChange={(e) => handleEditChange(index, 'description', e.target.value)}
//                                 />
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     className="border border-gray-300 p-2 rounded"
//                                     onChange={handleImageUpload}
//                                     required
//                                 />
//                                 <input
//                                     className="border w-full p-1 rounded"
//                                     value={product.price}
//                                     onChange={(e) => handleEditChange(index, 'price', e.target.value)}
//                                 />
//                                 <button
//                                     className="bg-green-500 text-white text-xs px-2 py-1 rounded"
//                                     onClick={handleSaveEdit}
//                                 >
//                                     Simpan
//                                 </button>
//                             </div>
//                         ) : (
//                             <>
//                                 <ProductCard
//                                     name={product.name}
//                                     description={product.description}
//                                     imageUrl={product.imageUrl}
//                                     price={product.price}
//                                 />
//                                 <div className="absolute bottom-5 right-5 flex">
//                                     <button
//                                         className=" text-white text-xs px-1 rounded"
//                                         onClick={() => setEditingIndex(index)}
//                                     >
//                                         ✏️
//                                     </button>
//                                     <button className="text-white text-xs px-1 rounded" onClick={() => handleDelete(index)}>🗑️</button>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </main>
//     );
// }