import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoScribeAI',
  description: 'EcoScribeAI is an AI-driven content automation tool that helps businesses write climate-focused SEO articles and blog posts. It combines the power of natural language processing with data on sustainability to provide unique, optimized content.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
