import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VxCode AI - Collaborate with Intelligence',
  description: 'AI-powered IDE that integrates seamlessly into your workflow, collaborating with you to maximize performance and efficiency.',
  keywords: 'AI IDE, code collaboration, AI agents, smart autocomplete, developer tools',
  authors: [{ name: 'VxCode AI Team' }],
  openGraph: {
    title: 'VxCode AI - Collaborate with Intelligence',
    description: 'AI-powered IDE that integrates seamlessly into your workflow, collaborating with you to maximize performance and efficiency.',
    type: 'website',
    url: 'https://vxcode.vxdev.fun',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VxCode AI - Collaborate with Intelligence',
    description: 'AI-powered IDE that integrates seamlessly into your workflow, collaborating with you to maximize performance and efficiency.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
