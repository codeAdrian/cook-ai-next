import './normalize.css'
import './globals.css'

import { Lobster, Outfit } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { PromptModelContextProvider } from '@/contexts/PromptModelContext'

export const metadata = {
  title: `CookAI's Recipe Magic`,
  description:
    'We provide delicious inspiration, fresh ideas, and turn your leftover food into recipes for yummy dishes and snacks.',
  metadataBase: new URL('https://cook-ai-next.vercel.app'),
}

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
