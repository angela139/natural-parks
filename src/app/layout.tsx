import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../styles/globals.scss';

const graphik = localFont({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-graphik',
});

const ogg = localFont({
  src: [
    {
      path: '../../public/fonts/Ogg.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ogg',
});

export const metadata: Metadata = {
  title: 'USA National Parks',
  description: 'A website to learn more about USA national parks!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${graphik.variable} ${ogg.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
