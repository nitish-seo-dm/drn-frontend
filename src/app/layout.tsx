import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import { Providers } from './providers'
import { cn } from '@/lib/utils'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'drn.today – Dynamic Reality Network',
  description: 'A futuristic decentralized newsroom platform for independent journalists.',
  openGraph: {
    title: 'drn.today – Dynamic Reality Network',
    description: 'A decentralized, AI-powered news platform of the future.',
    type: 'website',
    url: 'https://drn.today',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'DRN Today – Futuristic Decentralized Newsroom',
      },
    ],
  },
  other: {
    'application/rss+xml': 'https://drn.today/feed.xml',
    'application/atom+xml': 'https://drn.today/feed.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased flex min-h-screen bg-background text-foreground backdrop-blur-xs bg-glass-gradient',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen">
            <Topbar />
            <main className="flex-1 p-4 md:p-8 overflow-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
