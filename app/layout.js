import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SITE } from '../lib/site'

const description =
  `${SITE.product} runs AI call and email campaigns on your lead lists, answers inbound calls, and drafts replies to incoming mail for your team to review.`

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.product} by ${SITE.company}: AI calls and email for your leads`, template: `%s | ${SITE.company}` },
  description,
  openGraph: { type: 'website', siteName: SITE.company, url: SITE.url, description },
  twitter: { card: 'summary_large_image' },
}

export const viewport = { themeColor: '#0B0B0C' }

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className='flex min-h-screen flex-col'>
        <a href='#main' className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-lime focus:px-3 focus:py-2 focus:text-bg'>
          Skip to content
        </a>
        <Navbar />
        <main id='main' className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
