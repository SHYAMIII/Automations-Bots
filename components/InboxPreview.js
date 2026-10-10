import { Inbox, Send } from './Icons'
import { SITE } from '../lib/site'

/**
 * Drawing of the Hayo Inbox review screen (../AB-sales/src/pages/Inbox.tsx),
 * using its real labels. The message is an example, and the caption says so.
 * Swap for a real screenshot once one is available.
 */
export default function InboxPreview() {
  return (
    <figure>
      <div className='overflow-hidden rounded-lg border border-line bg-surface text-left shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]'>
        <div className='flex items-center justify-between border-b border-line px-4 py-3'>
          <div className='flex items-center gap-2 text-sm font-medium'>
            <Inbox className='h-4 w-4 text-muted' />
            Inbox
          </div>
          <div className='flex gap-1 text-xs'>
            <span className='rounded border border-line bg-raised px-2 py-1 text-ink'>Needs review</span>
            <span className='px-2 py-1 text-muted'>Sent</span>
            <span className='px-2 py-1 text-muted'>Discarded</span>
          </div>
        </div>

        <div className='space-y-4 p-4 sm:p-5'>
          <div className='flex flex-wrap items-center gap-2'>
            <span className='rounded border border-lime/30 bg-lime/10 px-2 py-0.5 text-xs text-lime'>Sales inquiry</span>
            <span className='rounded border border-line px-2 py-0.5 text-xs text-muted'>Pending Review</span>
          </div>

          <div className='rounded-md border border-line bg-bg p-3.5'>
            <div className='mb-2 flex flex-wrap items-baseline justify-between gap-x-3 text-xs text-muted'>
              <span><span className='text-ink'>Daniel Reyes</span> daniel@example.com</span>
              <span className='font-mono'>Re: Follow-up from our call</span>
            </div>
            <p className='text-sm leading-relaxed text-ink/90'>
              Thanks for the call yesterday. Could you send pricing for 40 locations? We would want to start next quarter.
            </p>
          </div>

          <div>
            <p className='mb-2 font-mono text-[11px] tracking-wide text-muted'>AI DRAFT (edit before sending)</p>
            <div className='rounded-md border border-line bg-bg p-3.5 text-sm leading-relaxed text-ink/90'>
              Hi Daniel, thanks for coming back to us. Pricing for 40 locations depends on expected call volume, so could we take
              20 minutes to go through it? Tuesday or Thursday afternoon both work for us.
            </div>
          </div>

          <div className='flex justify-end gap-2'>
            <span className='btn-secondary pointer-events-none py-2 text-xs'>Discard</span>
            <span className='btn-primary pointer-events-none py-2 text-xs'>
              <Send className='h-3.5 w-3.5' />
              Approve &amp; Send
            </span>
          </div>
        </div>
      </div>
      <figcaption className='mt-3 text-xs leading-relaxed text-muted'>
        The {SITE.product} inbox, shown with an example message. Replies wait here as drafts until someone on your team approves them.
      </figcaption>
    </figure>
  )
}
