import ContactForm from '../../components/ContactForm'
import { Mail } from '../../components/Icons'
import { SITE } from '../../lib/site'

export const metadata = {
  title: 'Book a demo',
  description: `Book a demo of ${SITE.product}, or ask the ${SITE.company} team a question.`,
  alternates: { canonical: '/contact' },
}

function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' className={className} aria-hidden='true'>
      <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22z' />
    </svg>
  )
}

export default function Contact() {
  return (
    <div className='mx-auto grid max-w-page gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1fr_1.4fr]'>
      <div>
        <p className='eyebrow mb-4'>Contact</p>
        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Book a demo</h1>
        <p className='mt-5 max-w-md leading-relaxed text-muted'>
          Tell us about your leads and what you want the agents to do. We will reply by email to set up a time and show you{' '}
          {SITE.product} working on a campaign like yours.
        </p>

        <div className='mt-10 space-y-3'>
          <a href={`mailto:${SITE.email}`} className='flex items-center gap-3 rounded-lg border border-line p-4 transition-colors hover:bg-surface'>
            <span className='flex h-9 w-9 items-center justify-center rounded-md border border-line text-lime'><Mail /></span>
            <span>
              <span className='block text-sm text-muted'>Email</span>
              <span className='block text-sm'>{SITE.email}</span>
            </span>
          </a>
          <a href={SITE.whatsapp.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 rounded-lg border border-line p-4 transition-colors hover:bg-surface'>
            <span className='flex h-9 w-9 items-center justify-center rounded-md border border-line text-lime'><WhatsAppIcon /></span>
            <span>
              <span className='block text-sm text-muted'>WhatsApp</span>
              <span className='block text-sm'>{SITE.whatsapp.display}</span>
            </span>
          </a>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}
