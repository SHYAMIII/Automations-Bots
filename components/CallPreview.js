import { PhoneOut } from './Icons'

const details = [
  { label: 'Duration', value: '4m 12s', mono: true },
  { label: 'Sentiment', value: 'Positive' },
  { label: 'Meeting booked', value: 'No' },
]

/**
 * Drawing of the Hayo call details view (../AB-sales/src/pages/CallHistory.tsx),
 * using its real field labels and duration format. The call is an example, the
 * same lead as InboxPreview; HeroPreview captions it.
 */
export default function CallPreview() {
  return (
    <div className='overflow-hidden rounded-lg border border-line bg-surface text-left'>
      <div className='flex items-center justify-between gap-3 border-b border-line px-4 py-3'>
        <div className='flex items-center gap-2 text-sm font-medium'>
          <PhoneOut className='h-4 w-4 text-muted' />
          Daniel Reyes
        </div>
        <span className='font-mono text-xs text-muted'>Q4 outbound · Oct 8, 14:20</span>
      </div>

      <div className='space-y-4 p-4 sm:p-5'>
        <dl className='grid grid-cols-3 gap-x-4 text-sm'>
          {details.map((d) => (
            <div key={d.label}>
              <dt className='whitespace-nowrap text-xs text-muted'>{d.label}</dt>
              <dd className={`mt-0.5 text-ink ${d.mono ? 'font-mono' : ''}`}>{d.value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <p className='mb-1.5 text-xs text-muted'>Summary</p>
          <p className='text-sm leading-relaxed text-ink/90'>
            Interested in rolling out across 40 locations next quarter. Asked for pricing by email before booking a call.
          </p>
        </div>
      </div>
    </div>
  )
}
