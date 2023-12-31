import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { Toaster } from "sonner";
import { ModalProvider } from '@/components/providers/modals-provider'
import { EdgeStoreProvider } from '@/lib/edgestore'
import Providers from '@/components/providers/session'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wiki',
  description: 'Wiki for Vsd',
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: '/favicon.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
    <Providers>
      <ConvexClientProvider>
      <EdgeStoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="wiki-theme-2"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            {authModal}
            {children}
          </ThemeProvider>
          </EdgeStoreProvider>
          </ConvexClientProvider>
          </Providers>
    </body>
  </html>
  )
}
