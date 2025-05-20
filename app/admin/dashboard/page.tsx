// 'use client';

// import { useEffect, useState } from 'react';
// import { dummyProducts, penjualanBulanan } from '@/app/lib/placeholder-data';
import { fetchSupplier, fetchPelanggan, fetchTransaksi, fetchProduk } from '@/app/lib/data';
import PenjualanChart from '@/app/components/PenjualanChart';
import { getJumlahTransaksi, getJumlahProduk, getTotalRevenue, getBestSeller } from '@/app/lib/utils';

import RevenueChart from '@/app/components/RevenueChart';

export default async function AdminDashboard() {
    // const [currentTime, setCurrentTime] = useState('');
    // const [adminName, setAdminName] = useState('');
    // const [noteInput, setNoteInput] = useState('');
    // const [notes, setNotes] = useState<string[]>([]);
    const supplier = await fetchSupplier();
    const pelanggan = await fetchPelanggan();

    const transaksi = await fetchTransaksi();
    const totalTransaksi = getJumlahTransaksi(transaksi);

    const revenue = await fetchTransaksi();
    const totalRevenue = await getTotalRevenue(revenue);

    const produk = await fetchProduk();
    const totalProduk = getJumlahProduk(produk);

    const bestSeller = await fetchTransaksi();
    const bestSellerCard = getBestSeller(bestSeller);

    // const currentTime = new Date().toLocaleTimeString();

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const interval = setInterval(() => {
    //             const now = new Date();
    //             setCurrentTime(now.toLocaleTimeString());
    //         }, 1000);

    //         const username = localStorage.getItem('username');
    //         if (username) setAdminName(username);

    //         return () => clearInterval(interval);
    //     }
    // }, []);

    // const handleAddNote = () => {
    //     if (noteInput.trim() !== '') {
    //         setNotes([...notes, noteInput.trim()]);
    //         setNoteInput('');
    //     }
    // };

    // const handleDeleteNote = (index: number) => {
    //     const updatedNotes = [...notes];
    //     updatedNotes.splice(index, 1);
    //     setNotes(updatedNotes);
    // };

    return (
        <div className="min-h-screen p-8 font-sans bg-[#F8F5F2] overflow-hidden">
            <h1 className="text-3xl font-bold text-[#D39C9C] mb-1">Dashboard Admin</h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">Hai, <span className="font-semibold">admin123</span> 👋 Semangat bekerja hari ini!</p>

            <div className="bg-gradient-to-r from-[#FFD5C2] to-[#FBE2DD] rounded-xl shadow p-6 flex items-center justify-center mb-6 w-full">
                <blockquote className="text-center text-[#D39C9C] italic text-lg font-medium whitespace-normal">
                    "Setiap bunga mekar pada waktunya, begitu juga dengan kesuksesan Ralivelle Florist🌸."
                </blockquote>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                <div className="bg-[#D39C9C] rounded-xl shadow p-3 text-center text-white hover:shadow-md transition">
                    <p className="text-gray-200">Best Seller</p>
                    <p className="text-lg font-semibold">{bestSellerCard.id_produk}</p>
                </div>
                <div className="bg-[#D39C9C] rounded-xl shadow p-3 text-center text-white hover:shadow-md transition">
                    <p className="text-gray-200">Total Produk</p>
                    <p className="text-lg font-bold">{totalProduk}</p>
                </div>
                <div className="bg-[#D39C9C] rounded-xl shadow p-3 text-center text-white hover:shadow-md transition">
                    <p className="text-gray-200">Total Transaksi</p>
                    <p className="text-lg font-bold">{totalTransaksi}</p>
                </div>

                <div className="bg-[#D39C9C] rounded-xl shadow p-3 text-center text-white hover:shadow-md transition">
                    <p className="text-gray-200">Total Revenue</p>
                    <p className="text-lg font-semibold">{totalRevenue}</p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-bold text-[#D39C9C] mb-4">Grafik Jumlah Transaksi Bulanan</h2>
                    <div className="flex justify-center">
                        <PenjualanChart />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-bold text-[#D39C9C] mb-4">Grafik Revenue Bulanan</h2>
                    <div className="flex justify-center">
                        <RevenueChart />
                    </div>
                </div>
            </div>


            <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-xl font-bold text-[#D39C9C] mb-4">Daftar Supplier</h2>
                <table className="min-w-full border text-sm text-gray-700">
                    <thead className="bg-[#FBE2DD]">
                        <tr>
                            <th className="border p-2">ID Supplier</th>
                            <th className="border p-2">Nama Supplier</th>
                            <th className="border p-2">No. Telepon</th>
                            <th className="border p-2">Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplier.map((supplier) => (
                            <tr key={supplier.id_supplier}>
                                <td className="border p-2">{supplier.id_supplier}</td>
                                <td className="border p-2">{supplier.nama_supplier}</td>
                                <td className="border p-2">{supplier.nomor_telepon}</td>
                                <td className="border p-2">{supplier.alamat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-xl font-bold text-[#D39C9C] mb-4">Daftar Pelanggan</h2>
                <table className="min-w-full border text-sm text-gray-700">
                    <thead className="bg-[#FBE2DD]">
                        <tr>
                            <th className="border p-2">ID Pelanggan</th>
                            <th className="border p-2">Nama Pelanggan</th>
                            <th className="border p-2">No. Telepon</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pelanggan.map((pelanggan) => (
                            <tr key={pelanggan.id_pelanggan}>
                                <td className="border p-2">{pelanggan.id_pelanggan}</td>
                                <td className="border p-2">{pelanggan.nama}</td>
                                <td className="border p-2">{pelanggan.nomor_telepon}</td>
                                <td className="border p-2">{pelanggan.email}</td>
                                <td className="border p-2">{pelanggan.alamat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-[#D39C9C] rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Catatan Admin</h3>
                <textarea
                    id="catatan"
                    name="catatan"
                    placeholder="Tambahkan catatan di sini..."
                    className="w-full p-3 border rounded-lg bg-white shadow-sm resize-none h-28 mb-2"
                // disabled
                ></textarea>
                <button
                    // onClick={handleAddNote}
                    className="px-4 py-2 bg-white text-[#D39C9C] rounded-md hover:bg-green-400 transition mb-4"
                >
                    Simpan Catatan
                </button>
                {/* {notes.length > 0 ? (
                    <ul className="space-y-2">
                        {notes.map((note, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                                <span className="text-gray-700">{note}</span>
                                <button
                                    onClick={() => handleDeleteNote(index)}
                                    className="text-sm text-red-500 hover:text-red-700 font-medium"
                                >
                                    Hapus
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">Belum ada catatan.</p>
                )} } */}
            </div>
        </div>
    );
}
