import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from '@/lib/store/store'
import { ReduxProvider } from '@/components/providers/redux-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Worknest India - Empower Your Earning Journey',
  description:
    "Join Worknest India and start earning by distributing banking, finance, and insurance products from India's top financial institutions.",
  generator: 'v0.app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='antialiased'>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
