import Link from 'next/link'
import Logo from './Logo'
import { SITE, APP_URL } from '../lib/site'

const groups = [
  {
    title: 'Product',
    links: [
      { href: '/#product', label: 'What it does' },
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/#faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: `mailto:${SITE.email}`, label: SITE.email, external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className='border-t border-line'>
      <div className='mx-auto grid max-w-page gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]'>
        <div className='space-y-4'>
          <Logo />
          <p className='max-w-xs text-sm leading-relaxed text-muted'>
            {SITE.company} makes {SITE.product}, software that runs AI call and email campaigns for sales teams.
          </p>
          {APP_URL && (
            <a href={`${APP_URL}/login`} className='inline-block text-sm text-ink underline-offset-4 hover:underline'>
              Sign in to {SITE.product}
            </a>
          )}
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <p className='eyebrow mb-4'>{g.title}</p>
            <ul className='space-y-2.5 text-sm'>
              {g.links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} className='break-all text-muted transition-colors hover:text-ink'>{l.label}</a>
                  ) : (
                    <Link href={l.href} className='text-muted transition-colors hover:text-ink'>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='border-t border-line'>
        <div className='mx-auto max-w-page px-4 py-6 text-xs text-muted sm:px-6'>
          © {new Date().getFullYear()} {SITE.company}
        </div>
      </div>
    </footer>
  )
}
