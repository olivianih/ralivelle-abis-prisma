'use client';

export default function BuyerProfilePage() {
  return (
    <div className="min-h-screen bg-white p-10 font-sans">
      <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
          Profil Pelanggan
        </h1>

        <div className="space-y-6 text-lg">
          <div>
            <label className="block text-gray-600 font-semibold">Nama Lengkap</label>
            <p className="text-black">Raden Rara Batari Setyowayi</p>
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
            <p className="text-black">batari.setyowayi@example.com</p>
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">Kemampuan</label>
            <ul className="text-black list-disc list-inside">
              <li>UI/UX Design (Spesialis)</li>
              <li>Pemrograman Web (Next.js, TypeScript)</li>
              <li>Database PostgreSQL (tanpa ORM)</li>
              <li>Pembuatan Laporan Keuangan</li>
              <li>Strategi Bisnis & SI/TI</li>
              <li>Manajemen Produk & Transaksi Online</li>
              <li>CMO & Co-founder Ralivelle Florist</li>
              <li>Kontributor pada Naturawear & SewaRide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}