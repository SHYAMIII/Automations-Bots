import Link from 'next/link'
import HeroPreview from '../components/HeroPreview'
import { PhoneOut, PhoneIn, Mail, Inbox, Check, Arrow, Plus } from '../components/Icons'
import { SITE, APP_URL, CREDIT_PACKS, CREDIT_COSTS } from '../lib/site'

const capabilities = [
  {
    icon: PhoneOut,
    title: 'Outbound calls',
    body: 'An AI agent calls each lead in a list during the dates and hours you set. You write its instructions and choose its voice and model. Every call is recorded, transcribed and summarised, with the lead\'s sentiment and whether a meeting was booked.',
  },
  {
    icon: Mail,
    title: 'Email campaigns',
    body: 'Emails start from your template and are personalised by AI for each lead, then sent from your own Gmail, Outlook or IMAP/SMTP mailbox. Replies come back to the same mailbox.',
  },
  {
    icon: PhoneIn,
    title: 'AI receptionist',
    body: `Calls to your ${SITE.product} number are answered by an AI receptionist. Each caller is matched against your lead lists and CRM, and every call is logged so you can see who called and how it went.`,
  },
  {
    icon: Inbox,
    title: 'Reply inbox',
    body: 'Incoming replies are sorted into categories such as sales inquiry, support question or unsubscribe, and the AI drafts an answer. Drafts wait for your approval unless you let a category send on its own.',
  },
]

const steps = [
  { title: 'Add your leads', body: 'Upload a CSV or Excel file, search Apollo, or import contacts from HubSpot.' },
  { title: 'Set up the campaign', body: 'Choose calls or email, give it a name, and set the dates and hours it may run.' },
  { title: 'Configure the agent', body: 'For calls, write the agent\'s instructions and pick its voice and model. For email, pick the mailbox, template and tone.' },
  { title: 'Review and start', body: 'Check the summary and start. Progress updates while it runs, and you can pause, resume or stop it at any time.' },
]

const controls = [
  'Replies are drafts by default. You decide which categories, if any, may send automatically, and the minimum confidence they need.',
  'Only admins and managers can manage your team or change how AI replies are handled.',
  'An audit log records who did what in your workspace, and when.',
  'Mailbox and CRM credentials are encrypted before they are stored.',
  'Your workspace data is not used to train AI models.',
]

const integrations = ['Gmail and Google Workspace', 'Outlook and Microsoft 365', 'Any IMAP/SMTP mailbox', 'HubSpot', 'Apollo', 'CSV and Excel files']

const faqs = [
  {
    q: 'Will it contact anyone without my say-so?',
    a: 'Campaign calls and emails go only to the leads in the list you choose, and only after you start the campaign. Replies to incoming mail are drafts by default, and send on their own only for categories you switch to auto-send.',
  },
  {
    q: 'Am I allowed to call and email my leads this way?',
    a: 'That depends on the laws where you and your leads are. You need a lawful basis for each contact, such as consent where the law requires it, and you must honour requests to stop. Our Terms list the main rules.',
    link: { href: '/terms#contacting', label: 'Read the Terms' },
  },
  {
    q: 'Can I hear what the agent said on a call?',
    a: 'Yes. Each call has a recording, a transcript and an AI summary, listed in your call history and on the campaign.',
  },
  {
    q: 'Do you train AI models on my data?',
    a: 'No. Your workspace data is processed only to run the service. The Privacy policy lists every provider that handles it and why.',
    link: { href: '/privacy#providers', label: 'See the providers' },
  },
  {
    q: 'How do I pay?',
    a: 'Plans and credit packs are paid through Stripe or Razorpay. Prices are in US dollars.',
  },
]

const fmt = (n) => n.toLocaleString('en-US')

function SectionHead({ eyebrow, title, children }) {
  return (
    <div className='max-w-2xl'>
      <p className='eyebrow mb-3'>{eyebrow}</p>
      <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>
      {children && <p className='mt-4 text-base leading-relaxed text-muted'>{children}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className='border-b border-line'>
        <div className='mx-auto grid max-w-page items-start gap-14 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_1fr]'>
          <div className='lg:pt-16'>
            <p className='eyebrow mb-5'>{SITE.product} by {SITE.company}</p>
            <h1 className='text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]'>
              Your lead list, called and emailed by AI agents.
            </h1>
            <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted'>
              {SITE.product} runs outbound call and email campaigns on the leads you upload, answers inbound calls, and drafts
              replies to incoming mail for your team to approve.
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link href='/contact' className='btn-primary px-5 py-3'>
                Book a demo
                <Arrow />
              </Link>
              <Link href='/#how-it-works' className='btn-secondary px-5 py-3'>How it works</Link>
            </div>
          </div>
          <HeroPreview />
        </div>
      </section>

      {/* What it does */}
      <section id='product' className='border-b border-line'>
        <div className='mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28'>
          <SectionHead eyebrow='What it does' title='Outbound, inbound and replies in one workspace'>
            Your team sets up the campaign and reviews the results. The agents make the calls, send the emails and draft the replies.
          </SectionHead>
          <div className='mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2'>
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className='bg-bg p-7 sm:p-8'>
                <div className='mb-5 flex h-9 w-9 items-center justify-center rounded-md border border-line text-lime'>
                  <Icon />
                </div>
                <h3 className='text-lg font-medium'>{title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted'>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id='how-it-works' className='border-b border-line bg-surface'>
        <div className='mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28'>
          <SectionHead eyebrow='How it works' title='From a spreadsheet to a running campaign in four steps' />
          <ol className='mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {steps.map((s, i) => (
              <li key={s.title} className='border-t border-line pt-6'>
                <span className='font-mono text-sm text-lime'>{String(i + 1).padStart(2, '0')}</span>
                <h3 className='mt-3 text-base font-medium'>{s.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted'>{s.body}</p>
              </li>
            ))}
          </ol>
          <p className='mt-12 max-w-2xl text-sm leading-relaxed text-muted'>
            When calls finish, each one shows up with its recording, transcript, summary and sentiment. The campaign page tracks
            progress, meetings booked, conversion and email delivery.
          </p>
        </div>
      </section>

      {/* Control and integrations */}
      <section className='border-b border-line'>
        <div className='mx-auto grid max-w-page gap-16 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2'>
          <div>
            <SectionHead eyebrow='Control' title='What stays with your team' />
            <ul className='mt-10 space-y-4'>
              {controls.map((c) => (
                <li key={c} className='flex gap-3 text-sm leading-relaxed text-ink/90'>
                  <Check className='mt-0.5 h-4 w-4 shrink-0 text-lime' />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead eyebrow='Works with' title='Connects to the tools you already use' />
            <ul className='mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2'>
              {integrations.map((name) => (
                <li key={name} className='bg-bg px-5 py-4 text-sm'>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id='pricing' className='border-b border-line bg-surface'>
        <div className='mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28'>
          <SectionHead eyebrow='Pricing' title='Pay for the calls and emails you use'>
            Calls use {CREDIT_COSTS.perCallMinute} credit per minute and emails use {CREDIT_COSTS.perEmail} credit each. Credits
            are bought in packs, separately from your plan. Your plan sets monthly limits on calls, emails and team members.
          </SectionHead>

          <div className='mt-12 overflow-x-auto rounded-lg border border-line'>
            <table className='w-full min-w-[34rem] text-left text-sm'>
              <thead className='border-b border-line bg-raised text-muted'>
                <tr>
                  <th scope='col' className='px-5 py-3 font-medium'>Credit pack</th>
                  <th scope='col' className='px-5 py-3 font-medium'>Price</th>
                  <th scope='col' className='px-5 py-3 font-medium'>Credits</th>
                  <th scope='col' className='px-5 py-3 font-medium'>Covers up to</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-line bg-bg'>
                {CREDIT_PACKS.map((p) => (
                  <tr key={p.name}>
                    <th scope='row' className='px-5 py-4 font-medium'>{p.name}</th>
                    <td className='px-5 py-4 font-mono'>${p.price}</td>
                    <td className='px-5 py-4 font-mono'>{fmt(p.credits)}</td>
                    <td className='px-5 py-4 text-muted'>
                      {fmt(p.credits / CREDIT_COSTS.perCallMinute)} call minutes or {fmt(p.credits / CREDIT_COSTS.perEmail)} emails
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='mt-4 text-xs text-muted'>Prices in US dollars. Plan prices are shown when you choose a plan.</p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            {APP_URL ? (
              <a href={`${APP_URL}/pricing`} className='btn-primary'>See plans</a>
            ) : (
              <Link href='/contact' className='btn-primary'>Ask about plans</Link>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id='faq' className='border-b border-line'>
        <div className='mx-auto grid max-w-page gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_1.6fr]'>
          <SectionHead eyebrow='FAQ' title='Questions we get asked'>
            Something else? Email{' '}
            <a href={`mailto:${SITE.email}`} className='text-ink underline underline-offset-4'>{SITE.email}</a>.
          </SectionHead>
          <div className='divide-y divide-line border-y border-line'>
            {faqs.map((f) => (
              <details key={f.q} className='group py-5'>
                <summary className='flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium [&::-webkit-details-marker]:hidden'>
                  {f.q}
                  <Plus className='mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-45' />
                </summary>
                <p className='mt-3 max-w-prose text-sm leading-relaxed text-muted'>
                  {f.a}
                  {f.link && (
                    <>
                      {' '}
                      <Link href={f.link.href} className='text-ink underline underline-offset-4'>{f.link.label}</Link>.
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className='mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28'>
          <div className='flex flex-col items-start justify-between gap-8 rounded-lg border border-line bg-surface p-8 sm:p-12 md:flex-row md:items-center'>
            <div className='max-w-xl'>
              <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>See a campaign run from upload to results.</h2>
              <p className='mt-3 text-muted'>Book a demo and we will walk you through {SITE.product} with a lead list like yours.</p>
            </div>
            <Link href='/contact' className='btn-primary shrink-0 px-5 py-3'>
              Book a demo
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
