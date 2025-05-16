// // import { Revenue } from './definitions';
import { produk } from '@/generated/prisma';
import type { transaksi } from './definitions';

// export const formatCurrency = (amount: number) => {
//   return (amount / 100).toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   });
// };

// export const formatDateToLocal = (
//   dateStr: string,
//   locale: string = 'en-US',
// ) => {
//   const date = new Date(dateStr);
//   const options: Intl.DateTimeFormatOptions = {
//     day: 'numeric',
//     month: 'short',
//     year: 'numeric',
//   };
//   const formatter = new Intl.DateTimeFormat(locale, options);
//   return formatter.format(date);
// };

// export const generateYAxis = (revenue: Revenue[]) => {
//   // Calculate what labels we need to display on the y-axis
//   // based on highest record and in 1000s
//   const yAxisLabels = [];
//   const highestRecord = Math.max(...revenue.map((month) => month.revenue));
//   const topLabel = Math.ceil(highestRecord / 1000) * 1000;

//   for (let i = topLabel; i >= 0; i -= 1000) {
//     yAxisLabels.push(`$${i / 1000}K`);
//   }

//   return { yAxisLabels, topLabel };
// };

export const generateYAxis = (counts: number[]) => {
  const yAxisLabels = [];
  const highest = Math.max(...counts);
  const topLabel = Math.ceil(highest / 5) * 5;

  for (let i = topLabel; i >= 0; i -= 1) {
    yAxisLabels.push(i.toString());
  }

  return { yAxisLabels, topLabel };
};

export function getJumlahTransaksi(data: transaksi[]): number {
  return data.length;
};

export function getJumlahTransaksiPerBulan(transaksi: transaksi[]) {
  const bulanMap = new Map<string, number>();

  for (const t of transaksi) {
    const bulan = t.tanggal_transaksi.slice(0, 7);
    bulanMap.set(bulan, (bulanMap.get(bulan) ?? 0) + 1);
  }

  const chartData = Array.from(bulanMap.entries()).map(([month, count]) => ({
    month,
    jumlah: count,
  }));

  chartData.sort((a, b) => a.month.localeCompare(b.month));

  return chartData;
}

// export function getJumlahProduk(data: produk[]) {
//   const jumlahPerProduk: { [produkId: string]: number } = {};

//   data.forEach((item) => {
//     const id = item.id_produk;
//     if (jumlahPerProduk[id]) {
//       jumlahPerProduk[id] += 1;
//     } else {
//       jumlahPerProduk[id] = 1;
//     }
//   });

//   return jumlahPerProduk;
// }

// export const generatePagination = (currentPage: number, totalPages: number) => {
//   // If the total number of pages is 7 or less,
//   // display all pages without any ellipsis.
//   if (totalPages <= 7) {
//     return Array.from({ length: totalPages }, (_, i) => i + 1);
//   }

//   // If the current page is among the first 3 pages,
//   // show the first 3, an ellipsis, and the last 2 pages.
//   if (currentPage <= 3) {
//     return [1, 2, 3, '...', totalPages - 1, totalPages];
//   }

//   // If the current page is among the last 3 pages,
//   // show the first 2, an ellipsis, and the last 3 pages.
//   if (currentPage >= totalPages - 2) {
//     return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
//   }

//   // If the current page is somewhere in the middle,
//   // show the first page, an ellipsis, the current page and its neighbors,
//   // another ellipsis, and the last page.
//   return [
//     1,
//     '...',
//     currentPage - 1,
//     currentPage,
//     currentPage + 1,
//     '...',
//     totalPages,
//   ];
// };
