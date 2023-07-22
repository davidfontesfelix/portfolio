import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'David Fontes',
  description: 'Portfolio criado com next',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    locate: string
  }
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="../assets/favicon.svg" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
