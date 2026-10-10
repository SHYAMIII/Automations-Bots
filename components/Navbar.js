'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import { APP_URL } from '../lib/site'

const links = [
  { href: '/#product', label: 'Product' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className='sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6'>
        <Logo />

        <nav className='hidden items-center gap-7 text-sm text-muted md:flex' aria-label='Main'>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className='transition-colors hover:text-ink'>{l.label}</Link>
          ))}
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          {APP_URL && <a href={`${APP_URL}/login`} className='btn text-muted hover:text-ink'>Sign in</a>}
          <Link href='/contact' className='btn-primary'>Book a demo</Link>
        </div>

        <button
          type='button'
          onClick={() => setOpen((v) => !v)}
          className='-mr-2 rounded-md p-2 text-ink md:hidden'
          aria-expanded={open}
          aria-controls='mobile-menu'
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='1.75' viewBox='0 0 24 24' aria-hidden='true'>
            {open ? <path strokeLinecap='round' d='M6 6l12 12M18 6L6 18' /> : <path strokeLinecap='round' d='M4 7h16M4 12h16M4 17h16' />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id='mobile-menu' className='border-t border-line px-4 pb-6 pt-2 md:hidden' aria-label='Mobile'>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className='block border-b border-line py-3 text-sm text-ink'>
              {l.label}
            </Link>
          ))}
          <div className='mt-5 flex flex-col gap-3'>
            <Link href='/contact' onClick={() => setOpen(false)} className='btn-primary'>Book a demo</Link>
            {APP_URL && <a href={`${APP_URL}/login`} className='btn-secondary'>Sign in</a>}
          </div>
        </nav>
      )}
    </header>
  )
}
