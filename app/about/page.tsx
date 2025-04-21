import { lusitana } from "@/app/ui/fonts";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AboutPage() {
    const teamMembers = [
        {
            id: '231712233',
            name: 'Raden Rara Batari Setyowati',
            image: '/tari.png',
            description: 'Saya adalah salah satu pendiri Ralivelle Florist dan menjabat sebagai CFO. Saya berfokus pada strategi finansial dan pengembangan usaha untuk memastikan pertumbuhan dan keberlanjutan Ralivelle Florist.',
        },
        {
            id: '231712241',
            name: 'Micele Louisa Karmaley',
            image: '/micele.png',
            description: 'Saya adalah salah satu pendiri Ralivelle Florist dan menjabat sebagai CEO. Saya berfokus pada inovasi, pengembangan bisnis, dan strategi pertumbuhan untuk memastikan Ralivelle Florist terus berkembang dan menjadi pilihan utama pelanggan.',
        },
        {
            id: '231712255',
            name: 'Olivia Kayleigh Budianto',
            image: '/olip.png',
            description: 'Saya adalah salah satu pendiri Ralivelle Florist dan menjabat sebagai CMO. Saya berfokus pada strategi pemasaran, branding, dan inovasi untuk memperkuat posisi Ralivelle Florist dan menjangkau lebih banyak pelanggan.',
        },
    ];

    return (
        <section className="p-6 flex flex-col gap-12">
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Ralivelle', href: '/' },
                    { label: 'About', href: '#', active: true },
                ]}
            />

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <img
                        src="/toko.png"
                        alt="Toko Bunga Ralivelle"
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 text-gray-800">
                    <h1 className={`${lusitana.className} text-2xl font-bold mb-4`}>🌸 Tentang Ralivelle Florist</h1>
                    <p className={`${lusitana.className} mb-4 text-2xl text-justify`}>
                        Ralivelle Florist, didirikan pada tahun 2025 oleh TaMiA, adalah toko bunga yang menghadirkan rangkaian bunga elegan dan berkualitas tinggi untuk berbagai momen spesial. Dengan sentuhan kreativitas dan detail yang memukau, Ralivelle Florist menawarkan buket cantik, bunga meja, dekorasi acara, hingga custom arrangement sesuai keinginan pelanggan. Mengutamakan keindahan dan ketahanan bunga, setiap produk dirancang dengan penuh cinta untuk menyampaikan perasaan terbaik kepada orang tersayang. Dengan layanan profesional dan pengiriman yang cepat, Ralivelle Florist siap menjadi pilihan utama bagi Anda yang ingin memberikan hadiah bermakna dengan sentuhan bunga yang istimewa.
                    </p>
                    <div className={`${lusitana.className} mt-6`}>
                        <h3 className="text-xl font-semibold mb-2">🌷 Visi & Misi Kami</h3>
                        <p className="text-gray-700 text-justify text-lg leading-relaxed">
                            Kami percaya bahwa setiap bunga membawa cerita. Misi kami adalah menyebarkan kebahagiaan melalui rangkaian bunga yang dirancang dengan cinta dan ketulusan, serta menjadi toko bunga yang terpercaya dan dicintai masyarakat.
                        </p>
                    </div>


                    <div className={`${lusitana.className} mt-6 border border-gray-400 rounded-lg p-4 bg-pink-50 text-base md:text-lg leading-relaxed font-medium`}>
                        <p> <strong>Temukan Ralivelle Florist  </strong><br /></p>
                        <p className="mt-2">📍 Jl. Melati Indah No. 23, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta</p>
                        <p className="mt-2">📞 WhatsApp: 0812-3456-7890</p>
                        <p className="mt-2">🕒 Buka setiap hari: 08.00 - 20.00 WIB</p>
                        <p className="mt-2">📩 Instagram: <a href="https://instagram.com/ralivelle.florist" target="_blank" className="text-pink-600 hover:underline">@ralivelle.florist</a></p>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full">
                    <h2 className="text-2xl font-semibold mb-6 text-center bg-[#D39C9C] text-black py-4 rounded">
                        Tim Kami
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white border-gray-400 rounded-lg p-4 text-center border"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-40 mx-auto object-cover mb-4 rounded-md"
                            />

                            <h3 className="text-lg text-left font-bold">{member.name}</h3>
                            <p className="text-sm text-left text-gray-500">{member.id}</p>
                            <p className="mt-2 text-justify text-gray-700 text-sm">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}