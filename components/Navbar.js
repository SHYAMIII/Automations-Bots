'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar(){
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className='fixed w-full z-40 bg-white'>
      <div className='max-w-6xl mx-auto px-6 pt-3 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-3 '>
          <img src='/logo.svg' alt='logo' className='w-10 h-10' />
          <span className='text-gray-800 text-2xl font-bold tracking-wide'>AUTOMATIONBOTS </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 items-center text-sm text-gray-700'>
          <Link href={isHomePage ? '#features' : '/#features'} className='hover:text-gray-900 transition-colors duration-200'>Services</Link>
          <Link href={isHomePage ? '#approach' : '/#approach'} className='hover:text-gray-900 transition-colors duration-200'>Approach</Link>
          <Link href='/demos' className='hover:text-gray-900 transition-colors duration-200'>Demos</Link>
          <Link href='/contact' className='px-4 py-2 rounded-full bg-blue-600 font-bold text-white hover:bg-blue-700 transition-colors duration-200'>Contact Team</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none'
          aria-label='Toggle mobile menu'
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-30 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full  w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col h-full'>
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between p-6 '>
            <Link href='/' className='flex items-center gap-3' onClick={() => setIsMobileMenuOpen(false)}>
              <img src='/logo.svg' alt='logo' className='w-8 h-8' />
              <span className='text-gray-800 font-semibold text-sm'>AutomationBots</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
              aria-label='Close mobile menu'
            >
              <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className='flex-1 px-6 py-8 space-y-6'>
            <Link 
              href={isHomePage ? '#features' : '/#features'} 
              className='block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 py-3 border-b border-gray-100'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href={isHomePage ? '#approach' : '/#approach'} 
              className='block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 py-3 border-b border-gray-100'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Approach
            </Link>
            <Link 
              href='/demos' 
              className='block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 py-3 border-b border-gray-100'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demos
            </Link>
           
          </nav>

          {/* Mobile Menu Footer */}
          <div className='p-6 border-t border-gray-100'>
            <div className='text-sm text-gray-500 text-center'>
              <p>Ready to get started?</p>
              <Link 
                href='/contact' 
                className='block mt-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200'
                onClick={() => setIsMobileMenuOpen(false)}
              > 
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
