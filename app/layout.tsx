import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar';
// const inter = Inter({ subsets: ['latin'] })

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'this just airbnb clones'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
