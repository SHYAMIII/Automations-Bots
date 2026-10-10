import { SITE } from '../lib/site'

export const Mail = () => <a href={`mailto:${SITE.email}`}>{SITE.email}</a>

export function LegalPage({ title, intro, children }) {
  return (
    <article className='mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24'>
      <p className='eyebrow mb-4'>Legal</p>
      <h1 className='text-4xl font-semibold tracking-tight'>{title}</h1>
      <p className='mt-3 text-sm text-muted'>Last updated {SITE.legalUpdated}</p>
      <div className='prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-xl prose-a:text-ink prose-a:underline-offset-4 prose-li:my-1 prose-p:text-ink/85 prose-li:text-ink/85'>
        {intro}
        {children}
      </div>
    </article>
  )
}

export function Section({ id, title, children }) {
  return (
    <section id={id} className='scroll-mt-24'>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
