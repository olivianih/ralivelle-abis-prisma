import '@/app/ui/global.css';
// import { amita } from '@/app/ui/fonts';
import Navbar from '@/app/components/NavbarAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="p-6">{children}</main>
    </>
  );
}

