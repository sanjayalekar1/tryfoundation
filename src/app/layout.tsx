import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNavigation from './components/MainNavigation';
import './globals.css';
import '../../public/assets/style.css';
import { createBrowserRouter } from 'react-router-dom';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <MainNavigation />
        {children}</body>
    </html>
  )
}
