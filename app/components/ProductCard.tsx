export interface ProductCardProps {
  id_produk: number;
  nama_produk: string;
  harga: string;
  foto: string;
  deskripsi: string;
  id_kategori: string;
}

export function ProductCard({ id_produk, nama_produk, harga, foto, deskripsi, id_kategori }: ProductCardProps) {
  return (
    <div className="p-4 border border-gray-400 rounded-lg h-full w-full flex flex-col items-start transition-colors duration-300 hover:border-[#D39C9C]">
      <div className="w-full aspect-square mb-4">
        <img
          src={foto}
          alt={nama_produk}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <p className="text-sm text-gray-600">{id_produk} - {id_kategori}</p>
      <h2 className="font-bold text-base">{nama_produk}</h2>
      <p className="text-sm text-gray-600">{deskripsi}</p>
      <p className="text-blue-500 mt-2 font-semibold">{harga}</p>
    </div>
  );
}
