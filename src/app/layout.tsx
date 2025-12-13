
'use client';

import type { Metadata } from 'next';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingContactButton } from '@/components/layout/FloatingContactButton';
import { cn } from '@/lib/utils';
import './globals.css';
import { ChatbotModalProvider } from '@/hooks/use-chatbot-modal';
import ChatbotModal from '@/components/chatbot/ChatbotModal';

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

// Metadata can't be exported from a client component, but we'll keep the definition for reference
// export const metadata: Metadata = {
//   title: 'LuzIA - Fundación La Luz',
//   description:
//     'Plataforma de inteligencia artificial de la Fundación La Luz para el apoyo en salud mental y la rehabilitación de adicciones.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
       <head>
        <title>LuzIA - Fundación La Luz</title>
        <meta
          name="description"
          content="Plataforma de inteligencia artificial de la Fundación La Luz para el apoyo en salud mental y la rehabilitación de adicciones."
        />
      </head>
      <body
        className={cn(
          'font-sans antialiased',
          playfair.variable,
          ptSans.variable
        )}
      >
        <ChatbotModalProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <FloatingContactButton />
          <ChatbotModal />
          <Toaster />
        </ChatbotModalProvider>
      </body>
    </html>
  );
}
