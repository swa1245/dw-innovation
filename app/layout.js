import { Playfair_Display } from 'next/font/google';
import { Outfit } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'DW Innovation',
  description: 'Digital Agency',
  icons: {
    icon: false,
    shortcut: false,
    apple: false
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfit.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
