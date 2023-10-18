import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LIFEEZY PHOTOGRAPHY',
description: 'Welcome to our world of beautiful imagery, where we take pride in covering all your special moments and engraving them in the stones of time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/LMEDIA LOGO2.PNG" type="image/x-icon" /> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
