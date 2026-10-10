import Link from 'next/link'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <div className='mx-auto max-w-page px-4 py-28 sm:px-6'>
      <p className='eyebrow mb-4'>404</p>
      <h1 className='text-4xl font-semibold tracking-tight'>This page does not exist.</h1>
      <p className='mt-4 text-muted'>The link may be old, or the address may have a typo.</p>
      <Link href='/' className='btn-primary mt-8'>Go to the home page</Link>
    </div>
  )
}
