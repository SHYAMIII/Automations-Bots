/** Line icons drawn on a 24px grid, matching the lucide set the app uses. */
function Icon({ children, className = 'h-4 w-4' }) {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' className={className} aria-hidden='true'>
      {children}
    </svg>
  )
}

export const PhoneOut = (p) => (
  <Icon {...p}>
    <path d='M16 2h6v6M22 2l-7 7' />
    <path d='M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z' />
  </Icon>
)

export const PhoneIn = (p) => (
  <Icon {...p}>
    <path d='M16 2v6h6M22 2l-6 6' />
    <path d='M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z' />
  </Icon>
)

export const Mail = (p) => (
  <Icon {...p}>
    <rect x='2' y='4' width='20' height='16' rx='2' />
    <path d='m22 7-10 6L2 7' />
  </Icon>
)

export const Inbox = (p) => (
  <Icon {...p}>
    <path d='M22 12h-6l-2 3h-4l-2-3H2' />
    <path d='M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z' />
  </Icon>
)

export const Check = (p) => (
  <Icon {...p}>
    <path d='M20 6 9 17l-5-5' />
  </Icon>
)

export const Send = (p) => (
  <Icon {...p}>
    <path d='m22 2-7 20-4-9-9-4z' />
    <path d='M22 2 11 13' />
  </Icon>
)

export const Arrow = (p) => (
  <Icon {...p}>
    <path d='M5 12h14M13 6l6 6-6 6' />
  </Icon>
)

export const Plus = (p) => (
  <Icon {...p}>
    <path d='M12 5v14M5 12h14' />
  </Icon>
)
