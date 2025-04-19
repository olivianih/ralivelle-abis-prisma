'use client';

export default function ForgotPasswordPage() {
  return (
    <div className="flex h-screen font-sans">
      {/* Kiri (Logo dan Branding) */}
      <div className="w-[30%] bg-[#CFA8A0] flex flex-col items-center justify-center p-10">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-44 h-44 flex items-center justify-center mb-6">
            <img src="/logoRalivelle.png" alt="Logo Ralivelle" className="h-28" />
          </div>
          <h1 className="text-white text-3xl font-serif">Ralivelle Florist</h1>
        </div>
      </div>

      {/* Kanan (Form Lupa Password) */}
      <div className="w-[70%] bg-white flex flex-col justify-center items-center px-10">
        <form className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Lupa Password</h2>
            <p className="text-sm text-gray-500">Masukkan email yang terkait dengan akunmu. Kami akan mengirimkan link untuk reset password.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="nama@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-full text-lg transition"
          >
            Kirim Link Pemulihan
          </button>

          <p className="text-sm text-center text-gray-600">
            Ingat password? <a href="/login" className="text-green-600 hover:underline">Login di sini</a>
          </p>
        </form>
      </div>
    </div>
  );
}
