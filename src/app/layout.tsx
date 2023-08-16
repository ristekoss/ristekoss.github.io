import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RISTEK Open Source'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:"smooth"}}>
        <body>{children}</body>
    </html>
  )
}
