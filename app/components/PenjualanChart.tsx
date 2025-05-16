import { CalendarIcon } from '@heroicons/react/24/outline';
import { fetchTransaksi } from '@/app/lib/data';
import { getJumlahTransaksiPerBulan } from '@/app/lib/utils';

export default async function TransaksiChart() {
  const raw = await fetchTransaksi();
  const transaksi = raw.map((t) => ({
    id_transaksi: t.id_transaksi,
    id_produk: t.id_produk ?? '',
    nama_pelanggan: t.nama_pelanggan ?? '',
    tanggal_transaksi: t.tanggal_transaksi ?? '',
    total_harga: t.total_harga ?? '',
  }));

  const jumlahPerBulan = getJumlahTransaksiPerBulan(transaksi);

  const chartHeight = 350;
  const maxJumlah = Math.max(...jumlahPerBulan.map((d) => d.jumlah));
  const topLabel = Math.ceil(maxJumlah / 5) * 5;
  const yAxisLabels = [];

  for (let i = topLabel; i >= 0; i -= 5) {
    yAxisLabels.push(i);
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">Jumlah Transaksi per Bulan</h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {jumlahPerBulan.map((bulan) => (
            <div key={bulan.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-[#D39C9C]"
                style={{
                  height: `${(chartHeight / topLabel) * bulan.jumlah}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {bulan.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Periode Januari-Juli 2025</h3>
        </div>
      </div>
    </div>
  );
}
