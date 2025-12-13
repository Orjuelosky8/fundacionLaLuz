import type { Metadata } from 'next';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'LuzIA - Fundación La Luz',
  description:
    'Plataforma de inteligencia artificial de la Fundación La Luz para el apoyo en salud mental y la rehabilitación de adicciones.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={cn(
        "font-body antialiased bg-background text-foreground",
        playfair.variable,
        ptSans.variable
      )}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
