'use client';

import { useEffect, useState } from 'react';
import { dummyProducts, penjualanBulanan } from '@/app/lib/placeholder-data';

export default function AdminDashboard() {
    const [currentTime, setCurrentTime] = useState('');
    const [adminName, setAdminName] = useState('');
    const [noteInput, setNoteInput] = useState('');
    const [notes, setNotes] = useState<string[]>([]);

    const totalProduk = dummyProducts.length;;
    const totalTransaksi = 75;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const interval = setInterval(() => {
                const now = new Date();
                setCurrentTime(now.toLocaleTimeString());
            }, 1000);

            const username = localStorage.getItem('username');
            if (username) setAdminName(username);

            return () => clearInterval(interval);
        }
    }, []);

    const handleAddNote = () => {
        if (noteInput.trim() !== '') {
            setNotes([...notes, noteInput.trim()]);
            setNoteInput('');
        }
    };

    const handleDeleteNote = (index: number) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

    return (
        <div className="min-h-screen p-8 font-sans bg-[#F8F5F2] overflow-hidden">
            <h1 className="text-3xl font-bold text-[#D39C9C] mb-1">Dashboard Admin</h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">Hai, <span className="font-semibold">{adminName}</span> 👋 Semangat bekerja hari ini!</p>

            <div className="bg-gradient-to-r from-[#FFD5C2] to-[#FBE2DD] rounded-xl shadow p-6 flex items-center justify-center mb-6 w-full">
                <blockquote className="text-center text-[#D39C9C] italic text-lg font-medium whitespace-normal">
                    "Setiap bunga mekar pada waktunya, begitu juga dengan kesuksesan Ralivelle Florist🌸."
                </blockquote>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                <div className="bg-[#D39C9C] rounded-xl shadow p-3 text-center text-white hover:shadow-md transition">
                    <p className="text-gray-200">Waktu</p>
                    <p className="text-lg font-semibold">{currentTime}</p>
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
                    <p className="text-gray-200">Keterangan</p>
                    <p className="text-lg font-semibold">Toko Berjalan Lancar!</p>
                </div>
            </div>


            <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-xl font-bold text-[#D39C9C] mb-4">Grafik Penjualan Bulanan</h2>
                <div className="flex justify-around">
                    {penjualanBulanan.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-20">
                            <div
                                className="bg-gradient-to-t from-[#F4A698] to-[#E2676F] rounded w-full"
                                style={{ height: `${Math.min(item.total * 3, 100)}%` }}
                            >
                                <div className="w-full text-center text-white font-semibold pt-2">
                                    <span>{item.total}</span>
                                </div>
                            </div>
                            <span className="text-xs md:text-sm text-gray-600 mt-2">{item.bulan}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#D39C9C] rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Catatan Admin</h3>
                <textarea
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    placeholder="Tambahkan catatan di sini..."
                    className="w-full p-3 border rounded-lg bg-white shadow-sm resize-none h-28 mb-2"
                ></textarea>
                <button
                    onClick={handleAddNote}
                    className="px-4 py-2 bg-white text-[#D39C9C] rounded-md hover:bg-[#E2A8A2] transition mb-4"
                >
                    Simpan Catatan
                </button>
                {notes.length > 0 ? (
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
                )}
            </div>
        </div>
    );
}
