import Link from 'next/link';
import { fetchProduk } from "@/app/lib/data";
import { ProductCard } from "@/app/components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";

export default async function ShopPage() {
    const products = await fetchProduk();

    return (
        <section className="p-6">
            <div>
                <Breadcrumbs
                    breadcrumbs={[
                        { label: "Ralivelle", href: "/home" },
                        { label: "Shop", href: "/shop", active: true },
                    ]}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6 overflow-x-auto">
                {products.map((product) => (
                    <Link
                        key={product.id_produk}
                        href={`/shop/${product.id_produk}`}
                        className="cursor-pointer"
                    >
                        <ProductCard
                            id_produk={product.id_produk}
                            nama_produk={product.nama_produk ?? ""}
                            deskripsi={product.deskripsi ?? ""}
                            foto={product.foto ?? ""}
                            harga={product.harga ?? ""}
                            id_kategori={product.id_kategori ?? ""}
                        />
                    </Link>
                ))}

            </div>
        </section>
    );
}
