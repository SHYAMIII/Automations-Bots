import Link from 'next/link'
import { SITE } from '../lib/site'

/** Same AB mark as the app icon (app/icon.svg). */
export function Mark({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox='0 0 64 64' className={className} aria-hidden='true'>
      <rect width='64' height='64' rx='14' fill='#C5F04A' />
      <path fill='#0B0B0C' fillRule='evenodd' d='M9 46 L18.5 18 H25.5 L35 46 H29 L27 40 H17 L15 46 Z M18.6 35 H25.4 L22 24.5 Z' />
      <path fill='#0B0B0C' fillRule='evenodd' d='M37 18 H46 C51.5 18 54 20.8 54 24.8 C54 27.6 52.6 29.6 50.3 30.6 C53.2 31.4 55 33.8 55 37.2 C55 42 52 46 45.6 46 H37 Z M42.6 23 V29.2 H45.4 C47.6 29.2 48.6 28 48.6 26.1 C48.6 24.2 47.6 23 45.4 23 Z M42.6 33.8 V41 H45.8 C48.4 41 49.6 39.6 49.6 37.4 C49.6 35.2 48.4 33.8 45.8 33.8 Z' />
    </svg>
  )
}

export default function Logo({ onClick }) {
  return (
    <Link href='/' onClick={onClick} className='flex items-center gap-2.5'>
      <Mark />
      <span className='text-[15px] font-semibold tracking-tight'>{SITE.company}</span>
    </Link>
  )
}
