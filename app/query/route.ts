import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listTransaksi() {
  const data = await sql`
    SELECT *
    FROM produk;
  `;
  return data;
}

export async function GET() {
  try {
    const result = await listTransaksi();
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
