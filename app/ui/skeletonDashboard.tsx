// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardBestSellerSkeleton() {
    return (
        <div className={`g-gray-200 rounded-xl p-3relative overflow-hidden ${shimmer}`}>
            <div className="h-5 w-24 mb-2 rounded-md bg-gray-200" />
            <div className="h-7 w-16 rounded-md bg-gray-200" />
        </div>
    );
}

export function CardTotalProdukSkeleton() {
    return (
        <div className={`g-gray-200 rounded-xl p-3relative overflow-hidden ${shimmer}`}>
            <div className="h-5 w-24 mb-2 rounded-md bg-gray-200" />
            <div className="h-7 w-16 rounded-md bg-gray-200" />
        </div>
    );
}

export function CardTotalTransaksiSkeleton() {
    return (
        <div className={`g-gray-200 rounded-xl p-3relative overflow-hidden ${shimmer}`}>
            <div className="h-5 w-24 mb-2 rounded-md bg-gray-200" />
            <div className="h-7 w-16 rounded-md bg-gray-200" />
        </div>
    );
}

export function CardTotalRevenueSkeleton() {
    return (
        <div className={`g-gray-200 rounded-xl p-3relative overflow-hidden ${shimmer}`}>
            <div className="h-5 w-24 mb-2 rounded-md bg-gray-200" />
            <div className="h-7 w-16 rounded-md bg-gray-200" />
        </div>
    );
}

export function PenjualanChartSkeleton() {
    return (
        <div className="w-full md:col-span-4">

            <div className={`mb-2 h-8 w-60 rounded-md bg-gray-200 relative overflow-hidden ${shimmer}`} />
            <div className={`mb-4 h-6 w-40 rounded-md bg-gray-200 relative overflow-hidden ${shimmer}`} />

            <div className="rounded-xl bg-gray-100 p-4">
                <div className="h-[410px] w-full rounded-md bg-gray-200" />

                <div className="mt-6 flex items-center space-x-2">
                    <div className="h-5 w-5 rounded-full bg-gray-200" />
                    <div className="h-4 w-32 rounded-md bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

export function RevenueChartSkeleton() {
    return (
        <div className="w-full md:col-span-4">

            <div className={`mb-4 h-8 w-60 rounded-md bg-gray-200 overflow-hidden ${shimmer}`} />
            <div className={`mb-4 h-6 w-40 rounded-md bg-gray-200 overflow-hidden ${shimmer}`} />

            <div className="rounded-xl bg-gray-100 p-4">
                <div className="h-[410px] w-full rounded-md bg-gray-200" />

                <div className="mt-6 flex items-center space-x-2">
                    <div className="h-5 w-5 rounded-full bg-gray-200" />
                    <div className="h-4 w-32 rounded-md bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

export function TabelSupplierSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow p-6 mb-6">

            <div className="h-6 w-48 mb-4 bg-gray-200 rounded" />

            <div className="h-8 w-full mb-3 bg-gray-200 rounded" />

            <div className="space-y-3">
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
            </div>
        </div>
    );
}

export function TabelCustomerSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow p-6 mb-6">

            <div className="h-6 w-48 mb-4 bg-gray-200 rounded" />

            <div className="h-8 w-full mb-3 bg-gray-200 rounded" />

            <div className="space-y-3">
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
                <div className="h-5 w-full bg-gray-200 rounded" />
            </div>
        </div>
    );
}

export function CatatanAdminSkeleton() {
    return (
        <div className="rounded-xl p-6 shadow mb-6">
            <div className="h-5 w-40 bg-gray-200 rounded mb-4" />

            <div className="h-28 w-full bg-gray-200 rounded mb-4" />

            <div className="h-10 w-32 bg-gray-200 rounded" />
        </div>
    );
}

export default function DashboardSkeleton() {
    return (
        <>
            <div
                className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
            />

            <div className={`mb-1 h-9 w-64 rounded-md bg-gray-200 overflow-hidden ${shimmer}`} />
            <div className={`mb-6 h-5 w-72 rounded-md bg-gray-200 overflow-hidden ${shimmer}`} />


            <div className={`mb-6 h-20 w-full rounded-md bg-gray-200 overflow-hidden ${shimmer}`} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <CardBestSellerSkeleton />
                <CardTotalProdukSkeleton />
                <CardTotalTransaksiSkeleton />
                <CardTotalRevenueSkeleton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="w-full">
                    <PenjualanChartSkeleton />
                </div>
                <div className="w-full">
                    <RevenueChartSkeleton />
                </div>
            </div>
            <div className="w-full">
                <TabelSupplierSkeleton />
                <TabelCustomerSkeleton />
            </div>
        </>
    );
}

