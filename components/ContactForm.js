'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE } from '../lib/site'

const empty = { name: '', email: '', company: '', phone: '', service: '', message: '', website: '' }

const interests = ['Outbound calls', 'Email campaigns', 'AI receptionist', 'Reply inbox', 'Not sure yet']

function Field({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className='mb-1.5 block text-sm text-ink'>
        {label}
        {!required && <span className='text-muted'> (optional)</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Delivery failed.')
      setStatus('sent')
      setForm(empty)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  if (status === 'sent') {
    return (
      <div role='status' className='rounded-lg border border-line bg-surface p-8'>
        <h2 className='text-xl font-semibold'>Thanks, we have your message.</h2>
        <p className='mt-2 text-sm leading-relaxed text-muted'>
          We will reply to the email address you gave us. If it is urgent, email{' '}
          <a href={`mailto:${SITE.email}`} className='text-ink underline underline-offset-4'>{SITE.email}</a>.
        </p>
        <button type='button' onClick={() => setStatus('idle')} className='btn-secondary mt-6'>Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className='space-y-5 rounded-lg border border-line bg-surface p-6 sm:p-8'>
      <div className='grid gap-5 sm:grid-cols-2'>
        <Field label='Name' id='name' required>
          <input id='name' name='name' required maxLength={120} autoComplete='name' value={form.name} onChange={update} className='field' />
        </Field>
        <Field label='Work email' id='email' required>
          <input id='email' name='email' type='email' required maxLength={200} autoComplete='email' value={form.email} onChange={update} className='field' />
        </Field>
        <Field label='Company' id='company'>
          <input id='company' name='company' maxLength={160} autoComplete='organization' value={form.company} onChange={update} className='field' />
        </Field>
        <Field label='Phone' id='phone'>
          <input id='phone' name='phone' type='tel' maxLength={40} autoComplete='tel' value={form.phone} onChange={update} className='field' />
        </Field>
      </div>

      <Field label='What are you most interested in?' id='service'>
        <select id='service' name='service' value={form.service} onChange={update} className='field'>
          <option value=''>Choose one</option>
          {interests.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </Field>

      <Field label='Message' id='message' required>
        <textarea
          id='message'
          name='message'
          required
          rows={5}
          maxLength={5000}
          value={form.message}
          onChange={update}
          className='field resize-y'
          placeholder='Who you sell to, roughly how many leads you have, and what you would like the agents to do.'
        />
      </Field>

      {/* Hidden from people. Bots that fill it are ignored by the server. */}
      <div className='hidden' aria-hidden='true'>
        <label htmlFor='website'>Website</label>
        <input id='website' name='website' tabIndex={-1} autoComplete='off' value={form.website} onChange={update} />
      </div>

      {status === 'error' && (
        <p role='alert' className='rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200'>
          {error === 'Delivery failed.' ? 'Your message did not send.' : error} Please try again, or email{' '}
          <a href={`mailto:${SITE.email}`} className='underline underline-offset-4'>{SITE.email}</a>.
        </p>
      )}

      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-xs leading-relaxed text-muted'>
          We use these details only to reply to you. See our <Link href='/privacy#website' className='underline underline-offset-4'>Privacy policy</Link>.
        </p>
        <button type='submit' disabled={status === 'sending'} className='btn-primary shrink-0 px-5 py-3 disabled:cursor-not-allowed disabled:opacity-60'>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
