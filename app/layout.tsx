import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}
