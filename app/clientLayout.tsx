'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isRegisterPage = pathname === '/register';
  const isForgotPasswordPage = pathname === '/lupaPassword';

  useEffect(() => {
    if (isLoginPage || isRegisterPage || isForgotPasswordPage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoginPage, isRegisterPage, isForgotPasswordPage]);

  return (
    <div className={`ml-64 min-h-screen flex flex-col ${isLoginPage || isRegisterPage || isForgotPasswordPage ? '' : 'overflow-auto'}`}>
      {!isLoginPage && !isRegisterPage && !isForgotPasswordPage && <Navbar />}
      <main className={`flex-grow  ${!isLoginPage && !isRegisterPage && !isForgotPasswordPage ? 'mt-16 p-6' : ''}`}>
        {children}
      </main>
      {!isLoginPage && !isRegisterPage && !isForgotPasswordPage && <Footer />}
    </div>
  );
}
