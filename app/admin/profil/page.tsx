'use client';

export default function AdminProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-black-700">
          Profil Admin
        </h1>

        <div className="space-y-6 text-lg">
          <div>
            <label className="block text-gray-600 font-semibold">Nama Lengkap</label>
            <p className="text-black">Admin</p>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Tanggal Lahir</label>
            <p className="text-black">1 Januari 2000</p>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Alamat</label>
            <p className="text-black">Jl. Mawar No. 10, Sleman, Yogyakarta</p>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Nomor Telepon</label>
            <p className="text-black">0812-3456-7890</p>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <p className="text-black">admin@ralivelle.com</p>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Role</label>
            <p className="text-black capitalize">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}