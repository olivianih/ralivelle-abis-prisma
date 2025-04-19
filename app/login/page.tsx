'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin123' && password === '12345') {
      localStorage.setItem('username', username);
      router.push('/admin/dashboard');
    } else if (username === 'user123' && password === '12345') {
      localStorage.setItem('username', username);
      router.push('/');
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <div className="flex h-screen font-sans">
      <div className="w-[30%] bg-[#CFA8A0] flex flex-col items-center justify-center p-10">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-44 h-44 flex items-center justify-center mb-6">
            <img src="/logoRalivelle.png" alt="Logo Ralivelle" className="h-28" />
          </div>
          <h1 className="text-white text-3xl font-serif">Ralivelle Florist</h1>
        </div>
      </div>

      <div className="w-[70%] bg-white relative flex flex-col justify-center items-center px-10">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-black">Selamat Datang di Ralivelle Florist!</h2>
            <p className="text-gray-500 mt-1">Masukkan email dan password untuk log in.</p>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-full text-lg transition"
          >
            Log in
          </button>

          <div className="text-sm text-gray-600 space-y-1 text-right">
            <a href="/lupaPassword" className="hover:underline block">Lupa Password</a>
            <span>
              Belum terdaftar?{' '}
              <a href="/register" className="hover:underline font-medium">Buat Akun</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
