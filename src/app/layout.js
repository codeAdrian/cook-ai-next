import './normalize.css'
import './globals.css'

import { Lobster, Outfit } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { PromptModelContextProvider } from '@/contexts/PromptModelContext'
import { Metadata } from 'next'

export const metadata = {
  title: `CookAI's Recipe Magic`,
  description: 'TODO',
  metadataBase: new URL('https://cook-ai-next.vercel.app'),
}

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-primary',
})
const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cursive',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${lobster.variable}`}>
        <main>
          <PromptModelContextProvider>{children}</PromptModelContextProvider>
          <Footer />
        </main>
      </body>
    </html>
  )
}
