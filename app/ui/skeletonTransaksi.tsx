const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function BreadcrumbSkeleton() {
    return (
        <div className="p-3">
            <div className="h-6 w-48 mb-2 bg-gray-200 rounded" />
        </div>
    );
}

export function TabelTransaksiSkeleton() {
    return (
        <div className="p-3">
            <div className="h-10 w-48 mb-5 bg-gray-200 rounded" />

            <div className="h-8 w-full mb-3 bg-gray-200 rounded" />

            <div className="space-y-3">
                <div className="h-8 w-full bg-gray-200 rounded" />
                <div className="h-8 w-full bg-gray-200 rounded" />
                <div className="h-8 w-full bg-gray-200 rounded" />
                <div className="h-8 w-full bg-gray-200 rounded" />
                <div className="h-8 w-full bg-gray-200 rounded" />
            </div>
        </div>
    );
}

export default function TransaksiSkeleton() {
    return (
        <>
            <div
                className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
            />
            <div className="w-full">
                <BreadcrumbSkeleton />
                <TabelTransaksiSkeleton />
            </div>
        </>
    );
}