'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const [currentTime, setCurrentTime] = useState('');
    const [adminName, setAdminName] = useState('');
    const [noteInput, setNoteInput] = useState('');
    const [notes, setNotes] = useState<string[]>([]);

    const totalProduk = 150;
    const totalTransaksi = 75;
    const penjualanBulanan = [
        { bulan: 'Jan', total: 20 },
        { bulan: 'Feb', total: 15 },
        { bulan: 'Mar', total: 25 },
        { bulan: 'Apr', total: 30 },
        { bulan: 'Mei', total: 35 },
        { bulan: 'Jun', total: 33 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        }, 1000);

        const username = localStorage.getItem('username');
        if (username) setAdminName(username);

        return () => clearInterval(interval);
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
        <div className="min-h-screen bg-[#F8F5F2] p-8 font-sans">
            <h1 className="text-3xl font-bold text-[#D39C9C] mb-1">Dashboard Admin</h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">Hai, <span className="font-semibold">{adminName}</span> 👋 Semangat bekerja hari ini!</p>

            {/* Motivasi */}
            <div className="bg-[#FCE4EC] rounded-xl shadow p-6 flex items-center justify-center mb-6 w-auto">
                <blockquote className="text-center text-[#D39C9C] italic text-lg font-medium">
                    "Setiap bunga mekar pada waktunya, begitu juga dengan kesuksesan Ralivelle Florist🌸."
                </blockquote>
            </div>

            {/* Ringkasan */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                <div className="bg-white rounded-xl shadow p-3 text-center hover:shadow-md transition">
                    <p className="text-gray-500">Waktu</p>
                    <p className="text-lg font-semibold text-[#D39C9C]">{currentTime}</p>
                </div>
                <div className="bg-white rounded-xl shadow p-3 text-center hover:shadow-md transition">
                    <p className="text-gray-500">Total Produk</p>
                    <p className="text-lg font-bold text-green-600">{totalProduk}</p>
                </div>
                <div className="bg-white rounded-xl shadow p-3 text-center hover:shadow-md transition">
                    <p className="text-gray-500">Total Transaksi</p>
                    <p className="text-lg font-bold text-blue-600">{totalTransaksi}</p>
                </div>
                <div className="bg-white rounded-xl shadow p-3 text-center hover:shadow-md transition">
                    <p className="text-gray-500">Keterangan</p>
                    <p className="text-lg font-semibold text-purple-600">Toko Berjalan Lancar!</p>
                </div>
            </div>

            {/* Grafik Penjualan */}
            <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-xl font-bold text-[#D39C9C] mb-4">Grafik Penjualan Bulanan</h2>
                <div className="flex items-end justify-between gap-2 h-64">
                    {penjualanBulanan.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-end w-full">
                            <div
                                className="w-full rounded-t-xl bg-gradient-to-t from-[#F4A698] to-[#E2676F] transition-all duration-300 ease-in-out hover:scale-105"
                                style={{ height: `${item.total * 6}px` }}
                            />
                            <span className="mt-2 text-sm text-gray-700">{item.bulan}</span>
                            <span className="text-xs text-gray-500">{item.total}x</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Aktivitas Terbaru */}
            <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-lg font-semibold text-[#D39C9C] mb-3">Aktivitas Terbaru</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li>✅ Produk baru ditambahkan - "Bouquet Mawar Pink"</li>
                    <li>📦 Transaksi #1024 berhasil</li>
                    <li>📝 Admin mengupdate stok tanggal 18 April</li>
                </ul>
            </div>

            {/* Catatan Admin */}
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-2 text-[#D39C9C]">Catatan Admin</h3>
                <textarea
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    placeholder="Tambahkan catatan di sini..."
                    className="w-full p-3 border rounded-lg bg-white shadow-sm resize-none h-28 mb-2"
                ></textarea>
                <button
                    onClick={handleAddNote}
                    className="px-4 py-2 bg-[#D39C9C] text-white rounded-md hover:bg-[#c28888] transition mb-4"
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
