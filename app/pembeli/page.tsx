import { cookies } from 'next/headers';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default async function BuyerProfilePage() {
  const email = cookies().get('user_email')?.value;

  if (!email) {
    return <div className="p-10">Silakan login terlebih dahulu.</div>;
  }

  const [user] = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;

  if (!user) {
    return <div className="p-10">Pengguna tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-white p-10 font-sans">
      <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">Profil Pelanggan</h1>
        <div className="space-y-6 text-lg">
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <p className="text-black">{user.email}</p>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Role</label>
            <p className="text-black">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}