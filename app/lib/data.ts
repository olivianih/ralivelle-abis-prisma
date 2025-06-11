import postgres from 'postgres';
import { supplier, pelanggan, transaksi, produk } from '@/generated/prisma';
import { produk_real, kategori_real, transaksi_real } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProduk(query = '', page = 1, limit = 6) {
  const offset = (page - 1) * limit;

  const produkQuery = query.trim() !== ''
    ? sql<produk_real[]>`
        SELECT * FROM produk_real
        WHERE nama_produk ILIKE ${`%${query}%`}
        ORDER BY id_produk ASC
        LIMIT ${limit} OFFSET ${offset}
      `
    : sql<produk_real[]>`
        SELECT * FROM produk_real
        ORDER BY id_produk ASC
        LIMIT ${limit} OFFSET ${offset}
      `;

  const countQuery = query.trim() !== ''
    ? sql`SELECT COUNT(*)::int AS count FROM produk_real WHERE nama_produk ILIKE ${`%${query}%`}`
    : sql`SELECT COUNT(*)::int AS count FROM produk_real`;

  const [produk, countResult] = await Promise.all([produkQuery, countQuery]);
  const total = countResult[0]?.count ?? 0;

  return { produk, total };
}

export async function fetchProdukById(id: string) {
  const data = await sql `SELECT * FROM produk_real WHERE id_produk = ${id}`;
  return data[0];
}

export async function fetchKategori() {
  try {
    const data = await sql<kategori_real[]>`
      SELECT * FROM kategori_real
      ORDER BY nama_kategori ASC
    `;

    console.log('Data fetch berhasil.');
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch kategori.');
  }
}

export async function deleteProduct(id_produk: number) {
  try {
    console.log(`Deleting product with id_produk = ${id_produk}`);
    await sql`
      DELETE FROM produk WHERE id_produk = ${id_produk}
    `;
    console.log("Delete successful.");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete product.");
  }
}

export async function fetchSupplier() {
  try {
    const data = await sql<supplier[]>`
      SELECT * FROM supplier
      ORDER BY nama_supplier ASC
    `;

    console.log('Data fetch berhasil.');
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch supplier.');
  }
}

export async function fetchPelanggan() {
  try {
    const data = await sql<pelanggan[]>`
      SELECT * FROM pelanggan
      ORDER BY nama ASC
    `;

    console.log('Data fetch berhasil.');
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pelanggan.');
  }
}


export async function fetchTransaksi(query: string | undefined) {
  try {
    const data = await sql<transaksi_real[]>`
      SELECT * FROM transaksi_real
      ORDER BY id_transaksi DESC
      ${query ? sql`WHERE nama_pelanggan ILIKE ${'%' + query + '%'}` : sql``}
    `;
    console.log('Data fetch berhasil.');
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch transaksi.');
  }
}

export async function deleteTransaksi(id: number) {
  await sql`DELETE FROM transaksi WHERE id_transaksi = ${id}`;
}

export async function deleteProduk(id_produk: number) {
  try {
    await sql`
      DELETE FROM produk_real
      WHERE id_produk = ${id_produk}
    `;
  } catch (error) {
    console.error('Gagal menghapus produk:', error);
    throw new Error('Gagal menghapus produk.');
  }
}

// export async function addTransaksi(data: {
//   id_transaksi: string;
//   id_produk: string;
//   nama_pelanggan: string;
//   tanggal_transaksi: string;
//   total_harga: string;
// }) {
//   try {
//     await sql`
//       INSERT INTO transaksi (
//         id_transaksi, id_produk, nama_pelanggan, tanggal_transaksi, total_harga
//       ) VALUES (
//         ${data.id_transaksi}, ${data.id_produk}, ${data.nama_pelanggan}, ${data.tanggal_transaksi}, ${data.total_harga}
//       )
//     `;
//   } catch (error) {
//     console.error('Gagal menambah transaksi:', error);
//     throw new Error('Gagal menambah transaksi.');
//   }
// }

// export async function editTransaksi(data: {
//   id_transaksi: string;
//   id_produk: string;
//   nama_pelanggan: string;
//   tanggal_transaksi: string;
//   total_harga: string;
// }) {
//   try {
//     await sql`
//       UPDATE transaksi SET
//         id_produk = ${data.id_produk},
//         nama_pelanggan = ${data.nama_pelanggan},
//         tanggal_transaksi = ${data.tanggal_transaksi},
//         total_harga = ${data.total_harga}
//       WHERE id_transaksi = ${data.id_transaksi}
//     `;
//   } catch (error) {
//     console.error('Gagal mengedit transaksi:', error);
//     throw new Error('Gagal mengedit transaksi.');
//   }
// }

// export async function deleteTransaksi(id_transaksi: string) {
//   try {
//     await sql`
//       DELETE FROM transaksi
//       WHERE id_transaksi = ${id_transaksi}
//     `;
//   } catch (error) {
//     console.error('Gagal menghapus transaksi:', error);
//     throw new Error('Gagal menghapus transaksi.');
//   }
// }

// export async function fetchCardData() {
//   try {
//     // You can probably combine these into a single SQL query
//     // However, we are intentionally splitting them to demonstrate
//     // how to initialize multiple queries in parallel with JS.
//     const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
//     const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
//     const invoiceStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//          SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
//          FROM invoices`;

//     const data = await Promise.all([
//       invoiceCountPromise,
//       customerCountPromise,
//       invoiceStatusPromise,
//     ]);

//     const numberOfInvoices = Number(data[0][0].count ?? '0');
//     const numberOfCustomers = Number(data[1][0].count ?? '0');
//     const totalPaidInvoices = formatCurrency(data[2][0].paid ?? '0');
//     const totalPendingInvoices = formatCurrency(data[2][0].pending ?? '0');

//     return {
//       numberOfCustomers,
//       numberOfInvoices,
//       totalPaidInvoices,
//       totalPendingInvoices,
//     };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch card data.');
//   }
// }

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredInvoices(
//   query: string,
//   currentPage: number,
// ) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const invoices = await sql<InvoicesTable[]>`
//       SELECT
//         invoices.id,
//         invoices.amount,
//         invoices.date,
//         invoices.status,
//         customers.name,
//         customers.email,
//         customers.image_url
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         invoices.amount::text ILIKE ${`%${query}%`} OR
//         invoices.date::text ILIKE ${`%${query}%`} OR
//         invoices.status ILIKE ${`%${query}%`}
//       ORDER BY invoices.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return invoices;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoices.');
//   }
// }

// export async function fetchInvoicesPages(query: string) {
//   try {
//     const data = await sql`SELECT COUNT(*)
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       invoices.amount::text ILIKE ${`%${query}%`} OR
//       invoices.date::text ILIKE ${`%${query}%`} OR
//       invoices.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of invoices.');
//   }
// }

// export async function fetchInvoiceById(id: string) {
//   try {
//     const data = await sql<InvoiceForm[]>`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.amount,
//         invoices.status
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;

//     const invoice = data.map((invoice) => ({
//       ...invoice,
//       // Convert amount from cents to dollars
//       amount: invoice.amount / 100,
//     }));

//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }

// export async function fetchCustomers() {
//   try {
//     const customers = await sql<CustomerField[]>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch all customers.');
//   }
// }

// export async function fetchFilteredCustomers(query: string) {
//   try {
//     const data = await sql<CustomersTableType[]>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(invoices.id) AS total_invoices,
// 		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN invoices ON customers.id = invoices.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }
