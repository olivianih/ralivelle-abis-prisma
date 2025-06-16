'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { deleteProduk } from '@/app/lib/data';
import postgres from 'postgres';
import { db } from '@/app/lib/data'
import bcrypt from 'bcryptjs'
import { createSession } from '@/app/lib/session'
import { cookies } from 'next/headers';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const ProductSchema = z.object({
  id_produk: z.coerce.number(),
  nama_produk: z.string(),
  deskripsi: z.string(),
  harga: z.coerce.number(),
  id_kategori: z.coerce.number(),
});

const TransaksiSchema = z.object({
  // id_transaksi: z.string(),
  id_produk: z.string(),
  nama_pelanggan: z.string(),
  // tanggal_transaksi: z.string(),
  total_harga: z.coerce.string(),
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
    id_produk,
    nama_produk,
    deskripsi,
    harga,
    id_kategori,
  } = UpdateProductSchema.parse({
    id_produk: formData.get('id_produk'),
    nama_produk: formData.get('nama_produk'),
    deskripsi: formData.get('deskripsi'),
    harga: Number(formData.get('harga')),
    id_kategori: formData.get('id_kategori') ?? '',
  });

  console.log("ID KATEGORI YANG DIKIRIM:", id_kategori);


  await sql`
  UPDATE produk_real
  SET nama_produk = ${nama_produk},
      deskripsi = ${deskripsi},
      harga = ${harga},
      id_kategori = ${id_kategori}
  WHERE id_produk = ${id_produk};
`;
  console.log({ id_kategori });

  revalidatePath('/admin/produk/overview');
  redirect('/admin/produk/overview');
}


// export async function deleteProduct(id: number) {
//   await sql`DELETE FROM produk_real WHERE id_produk = ${id}`;
//   revalidatePath('/admin/produk/(overview)');
// }

export async function addTransaksi(formData: FormData) {
  const {
    // id_transaksi,
    id_produk,
    nama_pelanggan,
    // tanggal_transaksi,
    total_harga,
  } = AddTransaksiSchema.parse({
    // id_transaksi: formData.get('id_transaksi'),
    id_produk: formData.get('id_produk'),
    nama_pelanggan: formData.get('nama_pelanggan'),
    // tanggal_transaksi: formData.get('tanggal_transaksi'),
    total_harga: formData.get('total_harga'),
  });

  const tanggal_transaksi = new Date().toLocaleString();

  await sql`
  INSERT INTO transaksi_real (
    id_produk,
    nama_pelanggan,
    tanggal_transaksi,
    total_harga
  )
  VALUES (
    ${id_produk},
    ${nama_pelanggan},
    ${tanggal_transaksi},
    ${total_harga}
  )
`;

  revalidatePath('/admin/transaksi');
  redirect('/admin/transaksi');
}

export async function handleDelete(formData: FormData) {
  const id = formData.get('id_produk');
  if (typeof id === 'string') {
    await deleteProduk(Number(id));
    revalidatePath('/admin/produk');
  }
}

// LOGIN
export async function login(_: any, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { errors: { email: ['Email and password required'] } }
  }

  const user = await db`SELECT * FROM users WHERE email = ${email}`
  if (!user.length || !(await bcrypt.compare(password, user[0].password))) {
    return { errors: { email: ['Invalid credentials'] } }
  }

  cookies().set('user_email', user[0].email);

  await createSession(user[0].id)

  if (user[0].role === 'admin') redirect('/admin/dashboard')
  else redirect('/home')
}

// SIGNUP
export async function signup(_: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!name || !email || !password) {
    return { errors: { email: ['All fields are required'] } }
  }

  const existingUser = await db`
    SELECT * FROM users WHERE email = ${email}
  `
  if (existingUser.length > 0) {
    return { errors: { email: ['Email already registered'] } }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await db`
    INSERT INTO users (name, email, password)
    VALUES (${name}, ${email}, ${hashedPassword})
    RETURNING id
  `

  await createSession(user[0].id)
  redirect('/login')
}