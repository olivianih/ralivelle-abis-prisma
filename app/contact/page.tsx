import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-center mb-10">Perlu Bantuan?</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-md">
        
        {/* Kontak Info */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="flex flex-col items-center">
            <PhoneIcon className="w-8 h-8 text-blue-600" />
            <p className="text-lg font-medium mt-2">(021)22172135</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPinIcon className="w-8 h-8 text-blue-600" />
            <p className="font-semibold mt-2">Ralievelle Florist</p>
            <p className="text-sm text-gray-600 max-w-xs mt-1">
            Jl. Melati Indah No. 23, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta
            </p>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-sm">
              Nama <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">
              Pesan Anda <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Kirim
          </button>
        </form>
      </div>
    </main>
  );
}