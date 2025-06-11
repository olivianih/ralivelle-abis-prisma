import NavbarAdmin from '@/app/components/NavbarAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <NavbarAdmin />
      <main className="w-full p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
