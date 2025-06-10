'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const ProductSchema = z.object({
  // id_produk: z.coerce.number(),
  nama_produk: z.string(),
  deskripsi: z.string(),
  harga: z.coerce.number(),
  id_kategori: z.coerce.number(),
});

const TransaksiSchema = z.object({
  id_transaksi: z.string(),
  id_produk: z.string(),
  nama_pelanggan: z.string(),
  tanggal_transaksi: z.string(),
  total_harga: z.string(),
});

const AddProductSchema = ProductSchema;
const UpdateProductSchema = ProductSchema;

const AddTransaksiSchema = TransaksiSchema;


export async function addProduct(formData: FormData) {
  const { nama_produk, deskripsi, harga, id_kategori } = AddProductSchema.parse({

    nama_produk: formData.get('nama_produk'),
    deskripsi: formData.get('deskripsi'),
    harga: formData.get('harga'),
    id_kategori: formData.get('kategori'),
  });

  console.log("Inserting product with category:", id_kategori);

  await sql`
  INSERT INTO produk_real (nama_produk, deskripsi, harga, id_kategori)
  VALUES (${nama_produk}, ${deskripsi}, ${harga}, 1)
`;
  

  revalidatePath('/admin/produk');
  redirect('/admin/produk');
}


export async function updateProduct(formData: FormData) {
  const {

    nama_produk,
    deskripsi,
    harga,
    id_kategori,
  } = UpdateProductSchema.parse({
    id_produk: formData.get('id_produk'),
    nama_produk: formData.get('nama_produk'),
    deskripsi: formData.get('deskripsi'),
    harga: formData.get('harga'),
    id_kategori: formData.get('kategori') ?? '',
  });

  // await sql`
  //   UPDATE produk
  //   SET nama_produk = ${nama_produk},
  //       deskripsi = ${deskripsi},
  //       harga = ${harga},
  //       id_kategori = ${id_kategori}
  //   WHERE id_produk = ${id_produk};
  // `;

  revalidatePath('/admin/produk');
  redirect('/admin/produk');
}


export async function deleteProduct(id: string) {
  await sql`DELETE FROM produk WHERE id_produk = ${id}`;
  revalidatePath('/admin/produk');
}

export async function addTransaksi(formData: FormData) {
  const {
    id_transaksi,
    id_produk,
    nama_pelanggan,
    tanggal_transaksi,
    total_harga,
  } = AddTransaksiSchema.parse({
    id_transaksi: formData.get('id_transaksi'),
    id_produk: formData.get('id_produk'),
    nama_pelanggan: formData.get('nama_pelanggan'),
    tanggal_transaksi: formData.get('tanggal_transaksi'),
    total_harga: formData.get('total_harga'),
  });

  await sql`
    INSERT INTO transaksi (id_transaksi, id_produk, nama_pelanggan, tanggal_transaksi, total_harga)
    VALUES (${id_transaksi}, ${id_produk}, ${nama_pelanggan}, ${tanggal_transaksi}, ${total_harga})
  `;

  revalidatePath('/admin/transaksi');
  redirect('/admin/transaksi');
}