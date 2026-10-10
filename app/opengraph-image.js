import { ImageResponse } from 'next/og'
import { SITE } from '../lib/site'

// Edge runtime: the Node build of @vercel/og fails to load on Windows in Next 14.
export const runtime = 'edge'
export const alt =`${SITE.product} by ${SITE.company}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Link preview image for social sites and chat apps. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#0B0B0C', color: '#EDEDEF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: '#C5F04A', color: '#0B0B0C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 700 }}>AB</div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>{SITE.company}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1, maxWidth: 980 }}>Your lead list, called and emailed by AI agents.</div>
          <div style={{ fontSize: 26, color: '#8B8B92' }}>{`${SITE.product}: outbound calls, email campaigns, an AI receptionist and a reply inbox.`}</div>
        </div>
      </div>
    ),
    size,
  )
}
