// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type produk = {
  id_produk: number;
  nama_produk: string;
  harga: string;
  foto: string;
  deskripsi: string;
  id_kategori: string;
};

export type produk_real = {
  id_produk: number;
  nama_produk: string;
  harga: number;
  foto: string;
  deskripsi: string;
  id_kategori: number;
};

export type produkField = {
  id_produk: number;
  nama_produk: string;
}

export type kategoriField = {
  id_kategori: string;
  nama_kategori: string;
};

export type kategori_real = {
  id_kategori: string;
  nama_kategori: string;
};


// export type kategoriField = {
//   id: number;
//   nama: string;
// };



export type supplier = {
  id_supplier: string;
  nama_supplier: string;
  nomor_telepon: string;
  alamat: string;
}

export type transaksi = {
  id_transaksi: string;
  id_produk: string;
  nama_pelanggan: string;
  tanggal_transaksi: string;
  total_harga: string;
};