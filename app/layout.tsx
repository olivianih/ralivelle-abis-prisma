import '@/app/ui/global.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { amita } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ralivelle Florist</title>
      </head>
      <body className={`${amita.className}`}>
      <Navbar />
        <main className="flex-grow mt-16 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
