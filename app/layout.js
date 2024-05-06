import { Inter } from "next/font/google";
import "./globals.css";
import { Kanit } from 'next/font/google'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'

const kanit = Kanit({ subsets: ['latin'],  weight: ['100', '200', '300', '400','500','600','700','800','900'] })

export const metadata = {
  title: "Naufal Rafi Hanifan | Keamanan Informasi",
  description: "Algoritma Enkripsi Modern Menggunakan RC4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className="bg-theme-dark text-[#ffffff] overflow-hidden">
          <Navbar/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
