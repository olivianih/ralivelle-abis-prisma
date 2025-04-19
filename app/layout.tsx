import '@/app/ui/global.css';
import { amita } from "@/app/ui/fonts";
import ClientLayoutWrapper from './clientLayout';

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
      <body className={`${amita.className} h-screen m-0 p-0`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
