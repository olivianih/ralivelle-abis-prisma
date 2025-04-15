import '@/app/ui/global.css';
import { amita } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${amita.className} antialiased`}>{children}</body>
    </html>
  );
}
