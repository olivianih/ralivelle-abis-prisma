// yy

import '@/app/ui/global.css';
// import { amita } from '@/app/ui/fonts';
import Navbar from '@/app/components/NavbarAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="ml-64 p-6">{children}</main>
    </>
  );
}

