import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

export const metadata = { title: 'AutomationBots  - AI-Powered Sales Development Representatives', description: 'Transform your sales with intelligent AI agents that make calls, qualify leads, and schedule meetings 24/7' }

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-white'>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
