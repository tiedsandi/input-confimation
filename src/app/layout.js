import {Roboto_Condensed} from 'next/font/google';
import './globals.css';

const Roboto = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: 'Confirmation Input',
  description: 'confirmation input for confirmation input',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`antialiased ${Roboto.className}`}>{children}</body>
    </html>
  );
}
