import { NextResponse } from 'next/server'

/**
 * Google Apps Script that appends contact requests to the team's sheet.
 * Set CONTACT_WEBHOOK_URL in the host's environment to change it. The fallback
 * is the script the site has always used.
 */
const WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycby2IGrERpSDETq81SqK3T3wINsnYIQ1S0Su7KKr3uE4K7jtqHK9gEMouItPW8_AvP0l/exec'

const LIMITS = { name: 120, email: 200, company: 160, phone: 40, service: 80, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Bots fill the hidden "website" field. Pretend it worked and drop it.
  if (body.website) return NextResponse.json({ ok: true })

  const data = {}
  for (const [key, max] of Object.entries(LIMITS)) {
    data[key] = typeof body[key] === 'string' ? body[key].trim().slice(0, max) : ''
  }
  if (!data.name || !data.message || !EMAIL_RE.test(data.email)) {
    return NextResponse.json({ error: 'Please fill in your name, a valid email and a message.' }, { status: 400 })
  }

  try {
    // Same keys and body format the sheet script has always received.
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      cache: 'no-store',
    })
    if (!res.ok) throw new Error(`Sheet script returned ${res.status}`)
  } catch (err) {
    console.error('Contact form delivery failed:', err)
    return NextResponse.json({ error: 'Delivery failed.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
