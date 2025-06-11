// app/shop/layout.tsx
'use client';

import NavbarShop from 'app/components/Navbar';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <NavbarShop />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}