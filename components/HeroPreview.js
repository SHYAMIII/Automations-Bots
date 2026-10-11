import CallPreview from './CallPreview'
import InboxPreview from './InboxPreview'
import { SITE } from '../lib/site'

/**
 * Two product views layered with a solid shadow: the call record sits behind,
 * the inbox reply in front, overlapping only the back card's bottom padding so
 * no text is hidden. No blur, translucency or motion.
 */
export default function HeroPreview() {
  return (
    <figure>
      <div>
        <div className='lg:w-[86%]'>
          <CallPreview />
        </div>
        <div className='relative -mt-3 ml-4 shadow-[0_-16px_40px_-12px_rgba(0,0,0,0.9),0_30px_60px_-20px_rgba(0,0,0,0.9)] lg:-mt-4 lg:ml-[14%]'>
          <InboxPreview />
        </div>
      </div>
      <figcaption className='mt-3 text-xs leading-relaxed text-muted'>
        {SITE.product} shown with an example lead: the call the agent made, then the reply it drafted when the lead emailed back.
        By default, replies wait as drafts until someone on your team approves them.
      </figcaption>
    </figure>
  )
}
