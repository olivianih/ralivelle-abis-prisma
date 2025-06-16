'use client'

import { signup } from '@/app/lib/actions'
import { useState } from 'react'

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="flex h-screen font-sans">
      {/* Kiri (Pink - 30%) */}
      <div className="w-[30%] bg-[#CFA8A0] flex flex-col items-center justify-center p-10">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-44 h-44 flex items-center justify-center mb-6">
            <img src="/logoRalivelle.png" alt="Logo Ralivelle" className="h-28" />
          </div>
          <h1 className="text-white text-3xl font-serif">Ralivelle Florist</h1>
        </div>
      </div>

      {/* Kanan (Putih - 70%) */}
      <div className="w-[70%] bg-white flex flex-col justify-center items-center px-10 relative">
        <form
          action={async (formData) => {
            const result = await signup(null, formData)
            if (result?.errors) {
              setError(result.errors.email[0])
            }
          }}
          className="w-full max-w-md space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Buat Akun Baru</h2>
            <p className="text-sm text-gray-500">Lengkapi data untuk mendaftar.</p>
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium bg-red-100 px-3 py-2 rounded">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-full text-lg transition"
          >
            Daftar
          </button>

          <p className="text-sm text-center text-gray-600">
            Sudah punya akun?{' '}
            <a href="/login" className="text-green-600 hover:underline font-medium">
              Login di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}